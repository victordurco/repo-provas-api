import { Request, Response, NextFunction } from "express";

import * as periodService from '../services/periodService';

export async function getAll(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const courses =  await periodService.getAll();
    return res.status(200).send(courses);
  } catch (error) {
    next(error);
  }
};
