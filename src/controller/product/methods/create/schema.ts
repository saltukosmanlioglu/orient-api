
import { zod } from "@ooic/core";
export const body = zod.object({
  allergens: zod.string(),
  description: zod.string(),
  image: zod.string(),
  name: zod.string(),
  price: zod.number(),
});
