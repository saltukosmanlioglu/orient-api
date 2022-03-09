import { Table } from "@/model/Table";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const update: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);

    const title = await Table.findOne({ where: { id: Number(id) } });

    title.update(schema.body.parse(request.body));
    response.status(200).send(title);
  } catch (error) {
    next(error);
  }
};

export default update;
