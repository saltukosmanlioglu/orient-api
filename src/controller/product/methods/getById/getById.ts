import { Product } from "@/model/Product";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const product = await Product.findOne({ where: { id: Number(id) } });
    response.status(200).send(product);
  } catch (error) {
    next(error)
  }
};

export default getById