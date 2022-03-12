import { Slider } from "@/model/Slider";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { orderMode, orderBy } = schema.query.parse(request.query);

    const categories = await Slider.findAll({
      order: [[orderMode, orderBy]],
      attributes: { exclude: ["productId"] },
      include: [{ association: "product", attributes: ["title", "id"] }],
    });
    response.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

export default get;
