import { Table } from "@/model/Table";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const table = await Table.findOne({
      where: { id: Number(id) },
    });
    response.status(200).send(table);
  } catch (error) {
    next(error)
  }
};

export default getById