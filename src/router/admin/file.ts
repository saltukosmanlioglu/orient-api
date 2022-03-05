import { express, Router } from "@ooic/core";
import * as file from "@/controller/file";

const router = Router();

router.use('/serve', express.static('uploads'))
router.post('/upload', file.upload);

export default router;
