import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { Product } from "@/model/Product";

const reorder: RequestHandler = async (request, response, next) => {
  try {
    const list = schema.body.parse(request.body);

    list.forEach((item) => {
      Product.findOne({
        where: { id: Number(item.id) },
      }).then((product) => {
        product.update({
          order: item.order,
        });
      });
    });
    response.status(200).send();
  } catch (error) {
    next(error);
  }
};

export default reorder;
