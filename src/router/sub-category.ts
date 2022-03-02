import { Router } from "@ooic/core";

import * as subCategory from "@/controller/sub-category";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", auth.verifyToken, subCategory.create);
router.put("/:id", auth.verifyToken, subCategory.update);
router.get("/", subCategory.get);
router.get("/:id", subCategory.getById);
router.delete("/:id", auth.verifyToken, subCategory.destroy);

export default router;
