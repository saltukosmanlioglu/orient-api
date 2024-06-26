import { RequestHandler } from "@ooic/core";
import { Category } from "@/model/Category";
import { schema } from ".";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await Category.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create