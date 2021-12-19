import { getRepository } from 'typeorm';

import * as teacherService from './teacherService';
import * as courseService from './courseService';
import * as examCategoryService from './examCategoryService';

import { Exam } from '../controllers/examController';
import { InvalidCourse, InvalidTeacher, InvalidCategory } from '../errors/examErrors';
import  ExamEntity  from '../entities/ExamEntity';

export async function createExam(exam: Exam): Promise<any> {

  const teacher = await teacherService.getById(exam.teacherId);
  if (!teacher) throw new InvalidTeacher();

  const course = await courseService.getById(exam.courseId);
  if (!course) throw new InvalidCourse();

  const category = await examCategoryService.getById(exam.categoryId);
  if (!category) throw new InvalidCategory();

  const newExam = await getRepository(ExamEntity).create(exam);
  await getRepository(ExamEntity).save(newExam);
  return newExam; 
}