import { getRepository, getManager } from 'typeorm';

import CourseEntity from '../entities/CourseEntity';
import { InvalidCourse } from '../errors/examErrors';

export async function getById(id: number): Promise<any> {
    const course = await getRepository(CourseEntity).find({ id: id });

    if (!course[0]) throw new InvalidCourse();
    
    return course[0];
}

export async function getAll(): Promise<any> {
    const courses = await getRepository(CourseEntity).find();
    
    return courses;
}

export async function getAllWithExams(): Promise<any> {
 const result = getManager().query(`
    SELECT
      courses.*,
      (
        SELECT
          json_agg(exams.id) AS exams
        FROM exams
        WHERE exams.course_id = courses.id
      ) AS exams
    FROM courses;
  `);
  return result;
}