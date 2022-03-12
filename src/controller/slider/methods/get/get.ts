import { Slider } from "@/model/Slider";
import { RequestHandler } from "@ooic/core";

const get: RequestHandler = async (request, response, next) => {
  try {
    const sliders = await Slider.findAll({
      attributes: { exclude: ["productId"] },
      include: [{ association: "product", attributes: ["title", "id"] }],
    });
    response.status(200).send(sliders);
  } catch (error) {
    next(error);
  }
};

export default get;
