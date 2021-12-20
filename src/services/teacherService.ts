import { getRepository, getManager } from 'typeorm';

import TeacherEntity from '../entities/TeacherEntity';


export async function getById(id: number): Promise<any> {
    const result = await getRepository(TeacherEntity).find({ id: id });
    return result[0];
}

export async function getAllWithExams(): Promise<any> {
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