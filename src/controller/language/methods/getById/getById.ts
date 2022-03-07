import { Language } from "@/model/Language";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const language = await Language.findOne({
      where: { id: Number(id) },
    });
    response.status(200).send(language);
  } catch (error) {
    next(error)
  }
};

export default getById