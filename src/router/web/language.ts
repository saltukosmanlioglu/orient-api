import { Router } from "@ooic/core";
const router = Router();

import * as language from "@/controller/language";

router.get("/", language.get);

export default router;
