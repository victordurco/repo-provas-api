import { Request, Response, NextFunction } from "express";

import * as courseService from '../services/courseService';
import * as periodService from '../services/periodService';

export async function getCourseTeachers (req: Request, res: Response, next: NextFunction): Promise<any>{
  const { courseId } = req.params;
  const id = Number(courseId);
  if (!id || id < 1 || typeof id !== 'number') return res.sendStatus(400);

  try {
    const course =  await courseService.getById(id);
    return res.status(200).send(course.teachers);
  } catch (error) {
    if (error.name === 'InvalidCourse') return res.status(404).send(error.message);
    next(error);
  }
};

export async function getCourses(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const courses =  await courseService.getAll();
    return res.status(200).send(courses);
  } catch (error) {
    next(error);
  }
};

export async function getPeriods(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const courses =  await periodService.getAll();
    return res.status(200).send(courses);
  } catch (error) {
    next(error);
  }
};

export async function getCoursesWithExams(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const courses =  await courseService.getAllWithExams();
    return res.status(200).send(courses);
  } catch (error) {
    next(error);
  }
};