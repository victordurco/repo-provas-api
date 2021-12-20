import { Request, Response, NextFunction } from "express";

import * as periodService from '../services/periodService';

import { Period } from '../protocols/Period';

export async function getAll(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const periods: Period[] =  await periodService.getAll();
    return res.status(200).send(periods);
  } catch (error) {
    next(error);
  }
};
