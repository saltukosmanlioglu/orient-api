
import { zod } from "@ooic/core";
export const body = zod.object({
  color: zod.string(),
  title: zod.string(),
});
