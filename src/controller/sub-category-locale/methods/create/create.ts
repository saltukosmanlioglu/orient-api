import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { SubCategoryLocale } from "@/model/SubCategoryLocale";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await SubCategoryLocale.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create