import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Instructor } from '../entities/instructor.entity';
import { User } from '../entities/user.entity';

@EntityRepository(Instructor)
export class InstructorsRepository extends Repository<Instructor> {
  async createInstructor(user: User) {
    const instructor = this.create({
      user,
    });
    try {
      await this.save(instructor);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
