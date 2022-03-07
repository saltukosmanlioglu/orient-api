import { Router } from "@ooic/core";
import * as subCategory from "@/controller/sub-category";

const router = Router();

router.get("/", subCategory.get);
router.get("/:id", subCategory.getById);

export default router;
