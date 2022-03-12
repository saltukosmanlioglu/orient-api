
import { zod } from "@ooic/core";
export const body = zod.object({
  allergens: zod.string().optional(),
  categoryId: zod.number().optional(),
  description: zod.string(),
  image: zod.string(),
  title: zod.string(),
  price: zod.string(),
  subCategoryId: zod.number().optional(),
});
