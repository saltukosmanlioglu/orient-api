import { Router } from "@ooic/core";

import * as product from "@/controller/product";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", auth.verifyToken, product.create);
router.put("/:id", auth.verifyToken, product.update);
router.get("/", product.get);
router.get("/:id", product.getById);
router.delete("/:id", auth.verifyToken, product.destroy);

export default router;
