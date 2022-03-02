import { Router } from "@ooic/core";

import * as slider from "@/controller/slider";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", auth.verifyToken, slider.create);
router.put("/:id", auth.verifyToken, slider.update);
router.get("/", slider.get);
router.get("/:id", slider.getById);
router.delete("/:id", auth.verifyToken, slider.destroy);

export default router;
