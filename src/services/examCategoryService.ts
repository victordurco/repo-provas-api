import { getRepository } from 'typeorm';

import ExamCategoryEntity from '../entities/ExamCategoryEntity';

import { ExamCategory } from '../protocols/ExamCategory';

export async function getById(id: number): Promise<ExamCategory> {
    const category = await getRepository(ExamCategoryEntity).find({ id: id });
    return category[0];
}

export async function getAll(): Promise<ExamCategory[]> {
    const categories = await getRepository(ExamCategoryEntity).find();
    return categories;
}