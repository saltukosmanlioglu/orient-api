import { ProductLocale } from "@/model/ProductLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const productLocales = await ProductLocale.findAll({
      where: { ...schema.query.parse(request.query) }
    });
    response.status(200).send(productLocales);
  } catch (error) {
    next(error)
  }
};

export default get