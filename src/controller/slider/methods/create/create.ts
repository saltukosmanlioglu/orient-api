import { RequestHandler } from "@ooic/core";
import { Slider } from "@/model/Slider";
import { schema } from ".";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await Slider.create({ ...schema.body.parse(request.body) });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create