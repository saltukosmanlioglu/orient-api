import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { SubCategory } from "@/model/SubCategory";

const reorder: RequestHandler = async (request, response, next) => {
  try {
    const list = schema.body.parse(request.body);
    
    list.forEach((item) => {
      SubCategory.findOne({
        where: { id: Number(item.id) },
      }).then((subCategory) => {
        subCategory.update({
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
