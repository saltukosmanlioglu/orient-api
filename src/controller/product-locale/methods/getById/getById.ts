import { ProductLocale } from "@/model/ProductLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const productLocale = await ProductLocale.findOne({
      where: { id: Number(id) }
    });
    response.status(200).send(productLocale);
  } catch (error) {
    next(error)
  }
};

export default getById