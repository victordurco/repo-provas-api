import { getRepository, getManager } from 'typeorm';

import CourseEntity from '../entities/CourseEntity';
import { InvalidCourse } from '../errors/examErrors';

import { CourseAllData, CourseWithExams } from '../protocols/Course';

export async function getById(id: number): Promise<CourseAllData> {
    const course = await getRepository(CourseEntity).find({ id: id });

    if (!course[0]) throw new InvalidCourse();
    
    const courseFound: CourseAllData = course[0];
    return courseFound;
}

export async function getAll(): Promise<CourseAllData[]> {
    const courses = await getRepository(CourseEntity).find();
    
    return courses;
}

export async function getAllWithExams(): Promise<CourseWithExams> {
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