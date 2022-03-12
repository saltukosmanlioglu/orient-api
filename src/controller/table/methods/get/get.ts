import { Table } from "@/model/Table";
import { RequestHandler } from "@ooic/core";

const get: RequestHandler = async (request, response, next) => {
  try {
    const tables = await Table.findAll({ order: [["createdAt", "desc"]] });

    response.status(200).send(tables);
  } catch (error) {
    next(error);
  }
};

export default get;
