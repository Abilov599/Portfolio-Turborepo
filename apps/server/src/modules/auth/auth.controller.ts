import { RegisterUserDto, LoginUserDto } from '@/core';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() registerUserDto: RegisterUserDto,
    @Res() res: Response,
  ) {
    await this.authService.register(registerUserDto, res);
  }

  @Post('login')
  async login(@Body() loginDto: LoginUserDto, @Res() res: Response) {
    await this.authService.login(loginDto, res);
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    await this.authService.logout(res);
  }
}
