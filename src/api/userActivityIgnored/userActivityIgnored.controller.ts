import { NextFunction, Request, Response } from "express";
import UserActivityIgnored from "./userActivityIgnored.model";

export const addIgnoredUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await new UserActivityIgnored({
      user: req.body.userId,
    }).save();
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const getIgnoredList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await UserActivityIgnored.find({}).exec();
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const removeIgnoredUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await UserActivityIgnored.deleteOne({ user: req.body.userId });
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};
