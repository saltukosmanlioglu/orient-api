import { SubCategoryLocale } from "@/model/SubCategoryLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const subCategoryLocale = await SubCategoryLocale.findOne({ where: { id: Number(id) } });

    subCategoryLocale.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy