import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDetailsDto } from './dtos/auth-details.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { ForgotPasswordDto } from './dtos/forgot-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('login')
  logIn(@Body() authDetailsDto: AuthDetailsDto) {
    return this.authService.logIn(authDetailsDto);
  }

  @Get('logout')
  logOut() {
    return this.authService.logOut();
  }
  //   forgot password

  @Post('forgotPassword')
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  //   social-login

  @Post('login/google')
  googleLogIn(@Body() reqBody: any) {
    return this.authService.googleLogin(reqBody);
  }
}
