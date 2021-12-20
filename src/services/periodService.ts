import { getRepository } from 'typeorm';

import PeriodEntity from '../entities/PeriodEntity';

import { Period } from '../protocols/Period';

export async function getAll(): Promise<Period[]> {
    const periods = await getRepository(PeriodEntity).find();
    
    return periods;
}
