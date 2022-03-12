import { Product } from "@/model/Product";
import { RequestHandler } from "@ooic/core";

const get: RequestHandler = async (request, response, next) => {
  try {
    const products = await Product.findAll({
      attributes: { exclude: ["categoryId", "subCategoryId"] },
      include: [
        { association: "category", attributes: ["title", "id"] },
        { association: "subCategory", attributes: ["title", "id"] },
      ],
    });
    response.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

export default get;
