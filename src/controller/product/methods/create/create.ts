import { RequestHandler } from "@ooic/core";
import { Product } from "@/model/Product";
import { schema } from ".";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await Product.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create