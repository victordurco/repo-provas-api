import { getRepository } from 'typeorm';

import ExamCategoryEntity from '../entities/ExamCategoryEntity';

export async function getById(id: number): Promise<any> {
    const category = await getRepository(ExamCategoryEntity).find({ id: id });
    return category[0];
}

export async function getAll(): Promise<any> {
    const categories = await getRepository(ExamCategoryEntity).find();
    return categories;
}