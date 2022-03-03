import { zod } from "@ooic/core";
export const body = zod.object({
  allergens: zod.string().optional(),
  description: zod.string(),
  locale: zod.string(),
  productId: zod.number(),
  title: zod.string(),
});
export const params = zod.object({
  id: zod.string().regex(/^\d+$/).transform(Number)
});
