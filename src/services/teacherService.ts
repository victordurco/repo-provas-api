import { getRepository } from 'typeorm';

import TeacherEntity from '../entities/TeacherEntity';

export async function getById(id: number): Promise<any> {
    const result = await getRepository(TeacherEntity).find({ id: id });
    return result[0];
}