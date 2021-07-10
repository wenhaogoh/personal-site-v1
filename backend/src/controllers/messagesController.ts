import { Request, Response, NextFunction } from "express";
import Message from "../models/message";
import { StatusCodes } from "http-status-codes";

async function retrieveMessages(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const messages = await Message.findAll();
    res.status(StatusCodes.OK).json(messages);
  } catch (err) {
    next(err);
  }
}

async function createMessage(req: Request, res: Response, next: NextFunction) {
  try {
    const message = await Message.create(req.body);
    res.status(StatusCodes.CREATED).json(message);
  } catch (err) {
    next(err);
  }
}

export const retrieveMessagesFuncs = [retrieveMessages];
export const createMessageFuncs = [createMessage];
