import { Product } from "@/model/Product";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const { categoryId, subCategoryId } = schema.query.parse(request.query);

    const products = await Product.findAll({
      attributes: { exclude: ["categoryId", "subCategoryId"] },
      // include: [
      //   { association: "category", attributes: ["title", "id"] },
      //   { association: "subCategory", attributes: ["title", "id"] },
      // ],
      where: {
        ...(categoryId ? { categoryId } : {}),
        ...(subCategoryId ? { subCategoryId } : {}),
      },
    });
    response.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

export default get;
