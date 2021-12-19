import { getRepository } from 'typeorm';

import ExamCategoryEntity from '../entities/ExamCategoryEntity';

export async function getById(id: number): Promise<any> {
    const result = await getRepository(ExamCategoryEntity).find({ id: id });
    return result[0];
}