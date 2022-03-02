import { Router } from "@ooic/core";
const router = Router();

import * as categoryLocale from "@/controller/category-locale";

router.post("/", categoryLocale.create);
router.put("/:id", categoryLocale.update);
router.get("/", categoryLocale.get);
router.get("/:id", categoryLocale.getById);
router.delete("/:id", categoryLocale.destroy);

export default router;
