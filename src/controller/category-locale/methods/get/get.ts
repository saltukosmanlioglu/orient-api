import { Category } from "@/model/Category";
import { CategoryLocale } from "@/model/CategoryLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const categoryLocales = await CategoryLocale.findAll({
      where: { ...schema.query.parse(request.query) },
      order: [["createdAt", "desc"]],
    });
    response.status(200).send(categoryLocales);
  } catch (error) {
    next(error);
  }
};

export default get;
