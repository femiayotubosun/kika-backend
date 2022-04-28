import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserRoles } from './entities/user-roles.enum';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    dto: CreateUserDto,
    role: UserRoles = UserRoles.STUDENT,
  ): Promise<void> {
    const { first_name, last_name, email, password } = dto;

    let found = await this.find({
      where: {
        email: dto.email,
      },
    });

    if (found[0]) throw new BadRequestException('Account already exists');

    const hashedPass = await this._hashpassword(password);

    const user = this.create({
      email,
      first_name,
      last_name,
      password: hashedPass,
      role,
    });

    try {
      await this.save(user);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async _hashpassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
}
