import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Database } from 'src/database.types';

type UserRow = Database['public']['Tables']['User']['Row'];

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<UserRow[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<UserRow> {
    return this.usersService.createUser(dto);
  }
}
