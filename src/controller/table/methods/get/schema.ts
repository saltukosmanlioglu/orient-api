import { zod } from "@ooic/core";

export const query = zod.object({
  title: zod.string().optional()
});