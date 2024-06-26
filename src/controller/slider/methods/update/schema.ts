import { zod } from "@ooic/core";
export const body = zod.object({
  productId: zod.number(),
  image: zod.string(),
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
