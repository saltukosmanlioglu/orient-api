import { Router } from "@ooic/core";
import * as subCategoryLocale from "@/controller/sub-category-locale";

const router = Router();

router.get("/", subCategoryLocale.get);
router.get("/:id", subCategoryLocale.getById);

export default router;
