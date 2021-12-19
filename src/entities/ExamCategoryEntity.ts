import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('exam_categories')
export default class ExamCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
}