import { zod } from "@ooic/core";

export const query = zod.object({
  title: zod.string().optional(),
  orderMode: zod.string().optional().default("asc"),
  orderBy: zod.string().optional().default("createdAt"),
});