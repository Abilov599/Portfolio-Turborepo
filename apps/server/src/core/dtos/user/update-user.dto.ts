import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDto } from './';

export class UpdateUserDto extends PartialType(RegisterUserDto) {}
