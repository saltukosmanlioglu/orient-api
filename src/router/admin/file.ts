import { Router } from "@ooic/core";
const router = Router();

import * as file from "@/controller/file";

router.post("/upload", file.upload);

export default router;
