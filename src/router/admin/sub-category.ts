import { Router } from "@ooic/core";

import * as subCategory from "@/controller/sub-category";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", subCategory.create);
router.put("/:id", subCategory.update);
router.get("/", subCategory.get);
router.get("/:id", subCategory.getById);
router.delete("/:id", subCategory.destroy);

export default router;
