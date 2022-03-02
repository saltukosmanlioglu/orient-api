import { zod } from "@ooic/core";
export const body = zod.object({
  color: zod.string(),
  title: zod.string(),
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
