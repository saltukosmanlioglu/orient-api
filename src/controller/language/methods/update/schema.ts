import { zod } from "@ooic/core";
export const body = zod.object({
  language: zod.string(),
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
