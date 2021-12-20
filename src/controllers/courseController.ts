import { Request, Response, NextFunction } from "express";

import * as courseService from '../services/courseService';

export async function getCourseTeachers (req: Request, res: Response, next: NextFunction): Promise<any>{
  const { id } = req.body;
  if (!id || id < 1 || typeof id !== 'number') return res.sendStatus(400);

  try {
    const course =  await courseService.getById(id);
    return res.status(200).send(course.teachers);
  } catch (error) {
    if (error.name === 'InvalidCourse') return res.status(404).send(error.message);
    next(error);
  }
};