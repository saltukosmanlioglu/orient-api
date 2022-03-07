import { Router } from "@ooic/core";

import * as product from "@/controller/product";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", product.create);
router.put("/:id", product.update);
router.get("/", product.get);
router.get("/:id", product.getById);
router.delete("/:id", product.destroy);

export default router;
