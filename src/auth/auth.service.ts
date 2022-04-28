import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDetailsDto } from './dtos/auth-details.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { ForgotPasswordDto } from './dtos/forgot-password.dto';
import { UserRepository } from './user.respository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    await this.userRepository.createUser(createUserDto);
  }

  logIn(authDetailsDto: AuthDetailsDto) {
    return authDetailsDto;
  }

  forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    return forgotPasswordDto;
  }

  googleLogin(reqBody: any) {
    return reqBody;
  }

  logOut() {
    return null;
  }
}
