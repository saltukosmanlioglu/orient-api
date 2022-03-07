import { Router } from "@ooic/core";
const router = Router();

import * as subCategoryLocale from "@/controller/sub-category-locale";
import * as auth from "@/controller/auth";

router.post("/", subCategoryLocale.create);
router.put("/:id", subCategoryLocale.update);
router.get("/", subCategoryLocale.get);
router.get("/:id", subCategoryLocale.getById);
router.delete("/:id", subCategoryLocale.destroy);

export default router;
