import { Product } from "@/model/Product";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const { language } = schema.query.parse(request.query);
    const product = await Product.findOne({
      where: { id: Number(id) },
      include: [
        {
          association: "locales",
          where: {
            locale: language || "TR",
          },
          required: false,
        },
      ],
    });

    if (language) {
      const localedProduct = {
        ...product.toJSON(),
        ...product.toJSON().locales[0],
      };

      return response.status(200).send(localedProduct);
    }

    response.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

export default getById;
