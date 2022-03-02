
import { zod } from "@ooic/core";
export const body = zod.object({
  categoryId: zod.number(),
  color: zod.string(),
  title: zod.string(),
});
