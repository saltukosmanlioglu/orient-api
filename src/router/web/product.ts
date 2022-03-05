import { Router } from "@ooic/core";
import * as product from "@/controller/product";

const router = Router();

router.get("/", product.get);
router.get("/:id", product.getById);

export default router;
