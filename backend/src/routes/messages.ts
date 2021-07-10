import { Router } from "express";
import * as messagesController from "../controllers/messagesController";

const router = Router();

router.get("/", messagesController.retrieveMessagesFuncs);
router.post("/", messagesController.createMessageFuncs);

export default router;
