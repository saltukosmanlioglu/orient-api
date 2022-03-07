import { Router } from "@ooic/core";

import * as slider from "@/controller/slider";
import * as auth from "@/controller/auth";

const router = Router();

router.post("/", slider.create);
router.put("/:id", slider.update);
router.get("/", slider.get);
router.get("/:id", slider.getById);
router.delete("/:id", slider.destroy);

export default router;
