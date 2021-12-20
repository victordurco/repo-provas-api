import { Period } from "./Period";
import { Teacher } from "./Teacher";

export interface Course{
  id: number;
  name: string;
}

export interface CourseWithExams extends Course{
  period_id: number;
  exams: number[];
}

export interface CourseAllData extends Course{
  periodId: number;
  period: Period;
  teachers: Teacher[];
}