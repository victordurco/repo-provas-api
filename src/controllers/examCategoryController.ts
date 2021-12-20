import { Request, Response, NextFunction } from "express";

import * as examCategoryService from '../services/examCategoryService';

export async function getExamCategories (req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const categories = await examCategoryService.getAll();
    return res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};