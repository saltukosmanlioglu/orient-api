import { zod } from "@ooic/core";

export const query = zod.object({
  orderMode: zod.string().optional().default("asc"),
  orderBy: zod.string().optional().default("createdAt"),
});