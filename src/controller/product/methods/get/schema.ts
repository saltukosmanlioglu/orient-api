import { zod } from "@ooic/core";

export const query = zod.object({
  categoryId: zod.number().optional(),
  subCategoryId: zod.number().optional(),
  title: zod.string().optional(),
});