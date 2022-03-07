import { Router } from "@ooic/core";
const router = Router();

import * as language from "@/controller/language";

router.post("/", language.create);
router.put("/:id", language.update);
router.get("/", language.get);
router.get("/:id", language.getById);
router.delete("/:id", language.destroy);

export default router;
