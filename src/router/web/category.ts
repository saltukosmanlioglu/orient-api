import { Router } from "@ooic/core";
import * as category from "@/controller/category";

const router = Router();

router.get("/", category.get);
router.get("/:id", category.getById);

export default router;
