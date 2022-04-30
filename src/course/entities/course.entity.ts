import { TimeStampped } from '../../shared/entities/timestampped.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instructor } from '../../user/entities/instructor.entity';

@Entity()
export class Course extends TimeStampped {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'integer' })
  price: number;

  @ManyToOne(
    (_type) => Instructor,
    (instructor) => {
      instructor.courses;
    },
  )
  instructor: Instructor;
}
