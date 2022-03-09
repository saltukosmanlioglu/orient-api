import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { Table } from "@/model/Table";
import uid2 from "uid2";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await Table.create({
      ...schema.body.parse(request.body),
      uid: uid2(10),
    });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
