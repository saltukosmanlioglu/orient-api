import { Router } from "@ooic/core";
import * as productLocale from "@/controller/product-locale";

const router = Router();

router.get("/", productLocale.get);
router.get("/:id", productLocale.getById);

export default router;
