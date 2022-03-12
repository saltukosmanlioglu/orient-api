import { Slider } from "@/model/Slider";
import { RequestHandler } from "@ooic/core";

const get: RequestHandler = async (request, response, next) => {
  try {
    const categories = await Slider.findAll({
      order: [["createdAt", "desc"]],
      attributes: { exclude: ["productId"] },
      include: [{ association: "product", attributes: ["title", "id"] }],
    });
    response.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

export default get;
