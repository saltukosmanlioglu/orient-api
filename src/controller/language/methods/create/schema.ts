
import { zod } from "@ooic/core";
export const body = zod.object({
  language: zod.string(),
});
