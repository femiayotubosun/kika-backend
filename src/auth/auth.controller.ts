import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../user/dtos/login.dto';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { UserRoles } from 'src/user/entities/user-roles.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup/student')
  signUp(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto, UserRoles.STUDENT);
  }

  @Post('signup/instructor')
  signUpInstructor(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto, UserRoles.INSTRUCTOR);
  }

  @Post('login')
  logIn(@Body() dto: LoginDto) {
    return this.authService.logIn(dto);
  }

  //   social-login

  @Post('login/google')
  googleLogIn(@Body() reqBody: any) {
    return this.authService.googleLogin(reqBody);
  }
}
