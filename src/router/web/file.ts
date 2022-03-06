import { express, Router } from "@ooic/core";

const router = Router();

router.use('/serve', express.static('uploads'))

export default router;
