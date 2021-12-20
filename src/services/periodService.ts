import { getRepository } from 'typeorm';

import PeriodEntity from '../entities/PeriodEntity';

export async function getAll(): Promise<any> {
    const periods = await getRepository(PeriodEntity).find();
    
    return periods;
}
