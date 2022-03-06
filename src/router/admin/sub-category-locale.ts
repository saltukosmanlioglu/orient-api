import { Router } from "@ooic/core";
const router = Router();

import * as subCategoryLocale from "@/controller/sub-category-locale";
import * as auth from "@/controller/auth";

router.post("/", auth.verifyToken, subCategoryLocale.create);
router.put("/:id", auth.verifyToken, subCategoryLocale.update);
router.get("/", auth.verifyToken, subCategoryLocale.get);
router.get("/:id", auth.verifyToken, subCategoryLocale.getById);
router.delete("/:id", auth.verifyToken, subCategoryLocale.destroy);

export default router;
