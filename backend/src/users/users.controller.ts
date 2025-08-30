import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll() {
    return this.usersService.getAllUsers();
  }

  @Post()
  async create(
    @Body() body: { email: string; name?: string; role?: 'USER' | 'ADMIN' },
  ) {
    const { email, name, role } = body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usersService.createUser(email, name, role);
  }
}
