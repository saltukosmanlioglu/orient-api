import { Category } from "@/model/Category";
import { CategoryLocale } from "@/model/CategoryLocale";
import { SubCategoryLocale } from "@/model/SubCategoryLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const subCategoryLocales = await SubCategoryLocale.findAll({
      where: { ...schema.query.parse(request.query) }
    });
    response.status(200).send(subCategoryLocales);
  } catch (error) {
    next(error)
  }
};

export default get