import { Router } from "@ooic/core";
const router = Router();

import * as table from "@/controller/table";

router.post("/", table.create);
router.put("/:id", table.update);
router.get("/", table.get);
router.get("/:id", table.getById);
router.delete("/:id", table.destroy);

export default router;
