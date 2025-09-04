import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  message: string;
}
