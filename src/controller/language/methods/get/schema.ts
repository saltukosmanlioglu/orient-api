import { zod } from "@ooic/core";

export const query = zod.object({
  language: zod.string().optional()
});