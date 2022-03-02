import { SubCategory } from "@/model/SubCategory";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const category = await SubCategory.findOne({ where: { id: Number(id) } });
    response.status(200).send(category);
  } catch (error) {
    next(error)
  }
};

export default getById