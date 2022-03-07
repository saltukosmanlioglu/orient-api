import { Category } from "@/model/Category";
import { Language } from "@/model/Language";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { language } = schema.query.parse(request.query);
    const languages = await Language.findAll({ order: [["language", "asc"]] });

    response.status(200).send(languages);
  } catch (error) {
    next(error);
  }
};

export default get;
