import { Request, Response, NextFunction } from "express";

import * as examCategoryService from '../services/examCategoryService';

import { ExamCategory } from '../protocols/ExamCategory';

export async function getExamCategories (req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const categories: ExamCategory[] = await examCategoryService.getAll();
    return res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};