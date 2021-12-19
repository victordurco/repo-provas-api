import { getRepository } from 'typeorm';

import { Exam } from '../controllers/examController';
import { InvalidCourse, InvalidTeacher, InvalidCategory } from '../errors/examErrors';

import  ExamEntity  from '../entities/ExamEntity';

export async function createExam(exam: Exam): Promise<any> {

  const newExam = await getRepository(ExamEntity).create(exam);
  await getRepository(ExamEntity).save(newExam);
  console.log(newExam);
  return newExam; 
}