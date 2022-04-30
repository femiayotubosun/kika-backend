import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from '../user/dtos/login.dto';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../user/users.respository';
import { StudentsRepository } from 'src/user/students.respository';
import { UserRoles } from 'src/user/entities/user-roles.enum';
import { User } from 'src/user/entities/user.entity';
import { InstructorsRepository } from 'src/user/repositories/instructors.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
    private studentsRepository: StudentsRepository,
    private instructorsRepository: InstructorsRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: CreateUserDto, role: UserRoles) {
    const user = await this.userRepository.createUser(dto);

    if (role === UserRoles.STUDENT) this.signUpStudent(user);
    if (role === UserRoles.INSTRUCTOR) this.signUpInstructor(user);

    // Create Student if it is a student
  }

  async logIn(dto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = dto;
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your credentials');
    }
  }

  async signUpStudent(user: User) {
    return await this.studentsRepository.createStudent(user);
  }

  async signUpInstructor(user: User) {
    return await this.instructorsRepository.createInstructor(user);
  }

  googleLogin(reqBody: any) {
    return reqBody;
  }
}
