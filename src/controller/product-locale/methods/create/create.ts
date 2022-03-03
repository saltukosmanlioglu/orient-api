import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { ProductLocale } from "@/model/ProductLocale";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await ProductLocale.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create