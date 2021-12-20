import { getRepository } from 'typeorm';

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