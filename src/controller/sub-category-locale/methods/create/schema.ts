
import { zod } from "@ooic/core";
export const body = zod.object({
  subCategoryId: zod.number(),
  locale: zod.string(),
  title: zod.string(),
});
