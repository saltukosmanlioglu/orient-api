import { CategoryLocale } from "@/model/CategoryLocale";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const categoryLocale = await CategoryLocale.findOne({ where: { id: Number(id) } });

    categoryLocale.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy