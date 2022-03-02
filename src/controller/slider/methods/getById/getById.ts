import { Slider } from "@/model/Slider";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const slider = await Slider.findOne({ where: { id: Number(id) } });
    response.status(200).send(slider);
  } catch (error) {
    next(error)
  }
};

export default getById