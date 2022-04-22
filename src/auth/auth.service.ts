import { Injectable } from '@nestjs/common';
import { AuthDetailsDto } from './dtos/auth-details.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { ForgotPasswordDto } from './dtos/forgot-password.dto';

@Injectable()
export class AuthService {
  //   FIXME
  signUp(createUserDto: CreateUserDto) {
    return createUserDto;
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
