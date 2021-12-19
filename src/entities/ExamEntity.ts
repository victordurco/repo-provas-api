import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne
} from 'typeorm';

import ExamCategoryEntity from './ExamCategoryEntity';
import TeacherEntity from './TeacherEntity';
import CourseEntity from './CourseEntity';

@Entity('exams')
export default class Exams {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  url: string;

  @Column()
  name: string; 

  @Column({name: 'category_id'})
  categoryId: number;

  @Column({name: 'teacher_id'})
  teacherId: number;

  @Column({name: 'course_id'})
  courseId: number;
    
  @OneToOne(() => ExamCategoryEntity, { eager: true })
  @JoinColumn({ name: 'category_id'})
  category: ExamCategoryEntity;

  @ManyToOne(() => TeacherEntity, teacher => teacher.id, { eager: true })
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => CourseEntity, course => course.id, { eager: true })
  @JoinColumn({ name: 'course_id' })
  course: CourseEntity;

}