import { SubCategory } from "@/model/SubCategory";
import { RequestHandler } from "@ooic/core";

const get: RequestHandler = async (request, response, next) => {
  try {
    const categories = await SubCategory.findAll({
      order: [["createdAt", "desc"]],
      include: [{ association: "category" }],
    });
    response.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

export default get;
