import { LoginUserDto, RegisterUserDto, User } from '@/core';
import { comparePassword, hashPassword } from '@/lib';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto, res: Response) {
    const existingUser = await this.usersRepository.exists({
      where: { email: registerUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await hashPassword(registerUserDto.password);

    const newUser = await this.usersRepository.save({
      ...registerUserDto,
      password: hashedPassword,
    });

    delete newUser.password;

    res.status(201).send(newUser);
  }

  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password, rememberMe } = loginUserDto;

    const existingUser = await this.usersRepository.findOne({
      where: { email: loginUserDto.email },
    });

    if (!existingUser) throw new NotFoundException();

    const isPasswordValid = await comparePassword(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) throw new UnauthorizedException();

    const token = this.jwtService.sign({ email });

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : null,
      path: '/',
    });

    delete existingUser.password;

    res.status(200).send(existingUser);
  }

  async logout(res: Response) {
    res
      .clearCookie('access_token')
      .status(200)
      .send({ message: 'You are successfully logged out', statusCode: 200 });
  }
}
