import { Product } from "@/model/Product";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { orderMode, orderBy } = schema.query.parse(request.query);

    const products = await Product.findAll({
      order: [[orderBy, orderMode]],
    });
    response.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

export default get;
