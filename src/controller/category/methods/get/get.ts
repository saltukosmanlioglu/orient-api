import { Category } from "@/model/Category";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { language } = schema.query.parse(request.query);
    const categories = await Category.findAll({
      order: [["order", "asc"]],
      include: [
        {
          association: "subCategories",
          include: [
            {
              association: "products",
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
        },
        {
          association: "locales",
          where: { locale: language || "TR" },
          required: false,
        },
      ],
    });

    if (language) {
      const localedCategories = categories.map((category) => ({
        ...category.toJSON(),
        ...category?.toJSON().locales?.[0],
        subCategories: category.toJSON().subCategories.map((subCategory) => ({
          ...subCategory,
          ...subCategory?.locales?.[0],
        })),
      }));

      return response.status(200).send(localedCategories);
    }

    response.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

export default get;
