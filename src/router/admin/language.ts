import { Router } from "@ooic/core";
const router = Router();

import * as language from "@/controller/language";
import * as auth from "@/controller/auth";

router.post("/", auth.verifyToken, language.create);
router.put("/:id", auth.verifyToken, language.update);
router.get("/", auth.verifyToken, language.get);
router.get("/:id", auth.verifyToken, language.getById);
router.delete("/:id", auth.verifyToken, language.destroy);

export default router;
