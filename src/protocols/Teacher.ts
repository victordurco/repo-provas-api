
export interface Teacher {
    id: number;
  name: string;
}

export interface TeacherWithExams extends Teacher {
    id: number;
  name: string;
  exams: number[];
}