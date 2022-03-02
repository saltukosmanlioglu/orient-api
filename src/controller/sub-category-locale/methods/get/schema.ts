import { zod } from "@ooic/core";

export const query = zod.object({
  subCategoryId: zod.number()
});