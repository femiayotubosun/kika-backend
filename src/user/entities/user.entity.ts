import { TimeStampped } from '../../shared/entities/timestampped.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './user-roles.enum';

@Entity()
export class User extends TimeStampped {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
