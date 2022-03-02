import { SubCategoryLocale } from "@/model/SubCategoryLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const subCategoryLocale = await SubCategoryLocale.findOne({
      where: { id: Number(id) }
    });
    response.status(200).send(subCategoryLocale);
  } catch (error) {
    next(error)
  }
};

export default getById