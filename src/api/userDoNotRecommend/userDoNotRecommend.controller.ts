import { NextFunction, Request, Response } from "express";
import ItemWeight from "./userDoNotRecommend.model";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let a = await ItemWeight.find();
    return res.json({ tags: a });
  } catch (error) {
    next(error);
  }
};
