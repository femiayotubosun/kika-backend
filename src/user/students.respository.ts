import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { User } from './entities/user.entity';

@EntityRepository(Student)
export class StudentsRepository extends Repository<Student> {
  async createStudent(user: User) {
    const student = this.create({
      user,
    });
    try {
      await this.save(student);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
