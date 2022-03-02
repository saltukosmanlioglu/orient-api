
import { zod } from "@ooic/core";
export const body = zod.object({
  image: zod.string(),
  productId: zod.number(),
});
