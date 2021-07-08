import { Request, Response, NextFunction } from "express";
import Message from "../models/message";
import { StatusCodes } from "http-status-codes";

async function createMessage(req: Request, res: Response, next: NextFunction) {
  try {
    const message = await Message.create(req.body);
    res.status(StatusCodes.CREATED).json(message);
  } catch (err) {
    next(err);
  }
}

export const createMessageFuncs = [createMessage];
