import { RequestHandler } from "@ooic/core";
import { SubCategory } from "@/model/SubCategory";
import { schema } from ".";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await SubCategory.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create