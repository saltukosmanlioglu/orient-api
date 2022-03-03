import { Router } from "@ooic/core";
const router = Router();

import * as productLocale from "@/controller/product-locale";

router.post("/", productLocale.create);
router.put("/:id", productLocale.update);
router.get("/", productLocale.get);
router.get("/:id", productLocale.getById);
router.delete("/:id", productLocale.destroy);

export default router;
