import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { InstructorsRepository } from './repositories/instructors.repository';
import { StudentsRepository } from './students.respository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UsersRepository } from './users.respository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersRepository,
      StudentsRepository,
      InstructorsRepository,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
