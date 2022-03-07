import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { Language } from "@/model/Language";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await Language.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create