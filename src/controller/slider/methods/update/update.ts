import { Slider } from "@/model/Slider";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const update: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);

    const slider = await Slider.findOne({ where: { id: Number(id) } });

    slider.update(schema.body.parse(request.body));
    response.status(200).send(slider);
  } catch (error) {
    next(error);
  }
};

export default update