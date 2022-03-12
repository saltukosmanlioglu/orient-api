import { Router } from "@ooic/core";
import * as slider from "@/controller/slider";

const router = Router();

router.get("/", slider.get);
router.get("/:id", slider.getById);

export default router;
