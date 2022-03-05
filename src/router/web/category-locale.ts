import { Router } from "@ooic/core";
import * as categoryLocale from "@/controller/category-locale";

const router = Router();

router.get("/", categoryLocale.get);
router.get("/:id", categoryLocale.getById);

export default router;
