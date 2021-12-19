import { getRepository } from 'typeorm';

import CourseEntity from '../entities/CourseEntity';

export async function getById(id: number): Promise<any> {

    const result = await getRepository(CourseEntity).find({ id: id });
    return result[0];
}