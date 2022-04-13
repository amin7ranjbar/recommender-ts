import { NextFunction, Request, Response } from "express";
import UserActivity from "./userActivity.model";
import UserActivityIgnored from "../userActivityIgnored/userActivityIgnored.model";
import * as _ from "lodash";

export const log = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = await new UserActivity({
      user: req.body.userId,
      item: req.body.itemId,
      itemMetadata: req.body.itemMetadata,
      action: req.body.action,
    }).save();
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const getActivityForUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await UserActivity.find({ user: req.params.userId })
      .lean()
      .exec();
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const getAllUserIdsWithActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let ignoredUsers = await UserActivityIgnored.find({}).distinct("user");
    let result = await UserActivity.find({
      user: { $nin: ignoredUsers },
    }).distinct("user");
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const removeLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await UserActivity.deleteOne({
      _id: req.body.id,
    });
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};
