import { getRepository, getManager } from 'typeorm';

import TeacherEntity from '../entities/TeacherEntity';

import { Teacher, TeacherWithExams } from '../protocols/Teacher';


export async function getById(id: number): Promise<Teacher> {
  const result = await getRepository(TeacherEntity).find({ id: id });
  const teacher: Teacher = result[0];
  return teacher;
}

export async function getAllWithExams(): Promise<TeacherWithExams[]> {
 const result = getManager().query(`
    SELECT
      teachers.*,
      (
        SELECT
          json_agg(exams.id) AS exams
        FROM exams
        WHERE exams.teacher_id = teachers.id
      ) AS exams
    FROM teachers;
  `);
  return result;
}