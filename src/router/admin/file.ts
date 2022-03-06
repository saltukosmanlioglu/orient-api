import { express, Router } from "@ooic/core";
import * as file from "@/controller/file";
import * as auth from "@/controller/auth";

const router = Router();

router.use("/serve", auth.verifyToken, express.static("uploads"));
router.post("/upload", auth.verifyToken, file.upload);

export default router;
