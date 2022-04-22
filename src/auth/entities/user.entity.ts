import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { string } from 'joi';
import { TimeStampped } from 'src/entities/timestampped.entity';
import { AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './user-roles.enum';

// NOTE Should extend TimeStamp
@Entity()
export class User extends TimeStampped {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.STUDENT })
  role: UserRoles;
}
