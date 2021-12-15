import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('exams')
export default class Exams {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  url: string;

  @Column()
  name: string;
    
  @Column()
  teacher_id: number;
  
  @Column()
  category_id: number;

  @Column()
  course_id: number;  
}