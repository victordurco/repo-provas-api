import { Request, Response, NextFunction } from "express";

import * as examService from '../services/examService';

import { newExamSchema } from '../validations/ExamSchema';

export interface Exam {
    url: string;
    name: string;
    teacherId: number;
    categoryId: number;
    courseId: number;
}

export async function createExam (req: Request, res: Response, next: NextFunction): Promise<any>{
  const validation = newExamSchema.validate(req.body);
  if (validation.error) return res.sendStatus(400);

  try {
    const examBody: Exam = req.body;
    await examService.createExam(examBody);
    return res.sendStatus(201);
  } catch (error) {
    if (error.name === "InvalidCategory") return res.status(404).send(error.message);
    if (error.name === "InvalidTeacher") return res.status(404).send(error.message);
    if (error.name === "InvalidCourse") return res.status(404).send(error.message);
    if (error.name === "IncompatibleCourseAndTeacher") return res.status(404).send(error.message);
    next(error);
  }
};