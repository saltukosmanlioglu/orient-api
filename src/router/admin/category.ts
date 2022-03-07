import { Router } from "@ooic/core";

import * as category from "@/controller/category";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", category.create);
router.put("/:id", category.update);
router.get("/", category.get);
router.get("/:id", category.getById);
router.delete("/:id", category.destroy);

export default router;
