import { Router } from "express";
import * as messagesController from "../controllers/messagesController";

const router = Router();

router.post("/", messagesController.createMessageFuncs);

export default router;
