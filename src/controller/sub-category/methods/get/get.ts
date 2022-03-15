import { SubCategory } from "@/model/SubCategory";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { categoryId } = schema.query.parse(request.query);

    const categories = await SubCategory.findAll({
      order: [["createdAt", "desc"]],
      attributes: { exclude: ["categoryId"] },
      include: [{ association: "category", attributes: ["title", "id"] }],
      where: { categoryId },
    });
    response.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

export default get;
