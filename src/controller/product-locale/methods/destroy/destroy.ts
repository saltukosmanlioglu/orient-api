import { ProductLocale } from "@/model/ProductLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const productLocale = await ProductLocale.findOne({ where: { id: Number(id) } });

    productLocale.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy