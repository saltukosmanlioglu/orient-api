import { Category } from "@/model/Category";
import { RequestHandler } from "@ooic/core";

const get: RequestHandler = async (request, response, next) => {
  try {
    const categories = await Category.findAll({
      order: [["order", "asc"]],
      include: [{
        association: "subCategories", include: [{
          association: "products",
        }]
      }, {
        association: 'products'
      }]
    });
    response.status(200).send(categories);
  } catch (error) {
    next(error)
  }
};

export default get