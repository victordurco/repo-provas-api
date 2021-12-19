import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable
} from "typeorm";

import PeriodEntity from './PeriodEntity';
import ExamEntity from './ExamEntity';
import TeacherEntity from "./TeacherEntity";

@Entity('courses')
export default class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column({name: 'period_id'})
  periodId: number;

  @OneToOne(() => PeriodEntity, { eager: true })
  @JoinColumn({ name: 'period_id'})
  period: PeriodEntity;

  @OneToMany(() => ExamEntity, exam => exam.course)
  exams: ExamEntity;

  @ManyToMany(() => TeacherEntity, teacher => teacher.id, { eager: true })
  @JoinTable({
    name: 'classes',
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: "teacher_id",
      referencedColumnName: "id"
    }
  })
  teachers: TeacherEntity[];

}