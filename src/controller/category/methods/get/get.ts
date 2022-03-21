import { localizer } from "@/app";
import { Category } from "@/model/Category";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { language, orderMode, orderBy } = schema.query.parse(request.query);

    const categories = await Category.findAll({
      order: [[orderBy, orderMode]],
      include: [
        {
          association: "subCategories",
          include: [
            {
              association: "products",
              include: [
                {
                  association: "locales",
                  where: {
                    locale: language || "TR",
                  },
                  required: false,
                },
              ],
            },
            {
              association: "locales",
              where: {
                locale: language || "TR",
              },
              required: false,
            },
          ],
        },
        {
          association: "products",
          include: [
            {
              association: "locales",
              where: {
                locale: language || "TR",
              },
              required: false,
            },
          ],
        },
        {
          association: "locales",
          where: { locale: language || "TR" },
          required: false,
        },
      ],
    });

    if (language) {
      const localed = categories.map((category) => localizer(category.toJSON()));

      return response.status(200).send(localed);
    }

    response.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

export default get;
