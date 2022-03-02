import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { CategoryLocale } from "@/model/CategoryLocale";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await CategoryLocale.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create