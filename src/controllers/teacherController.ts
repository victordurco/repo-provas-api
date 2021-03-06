import { Request, Response, NextFunction } from "express";

import * as teacherService from '../services/teacherService';

import { TeacherWithExams } from "../protocols/Teacher";

export async function getTeachers(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const teachers: TeacherWithExams[] =  await teacherService.getAllWithExams();
    return res.status(200).send(teachers);
  } catch (error) {
    next(error);
  }
};