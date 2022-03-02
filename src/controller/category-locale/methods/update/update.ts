import { Category } from "@/model/Category";
import { CategoryLocale } from "@/model/CategoryLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const update: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);

    const categoryLocale = await CategoryLocale.findOne({ where: { id: Number(id) } });

    categoryLocale.update(schema.body.parse(request.body));
    response.status(200).send(categoryLocale);
  } catch (error) {
    next(error);
  }
};

export default update