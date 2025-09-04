import {
  InternalServerErrorException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/database.types';
import { CreateUserDto } from './dto/create-user.dto';

type UserRow = Database['public']['Tables']['User']['Row'];
type UserInsert = Database['public']['Tables']['User']['Insert'];

@Injectable()
export class UsersService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient<Database>,
  ) {}

  async getAllUsers(): Promise<UserRow[]> {
    const { data, error } = await this.supabase.from('User').select('*');
    if (error) throw new InternalServerErrorException(error.message);
    return data ?? [];
  }

  async createUser(dto: CreateUserDto): Promise<UserRow> {
    const insert: UserInsert = {
      email: dto.email,
      name: dto.name,
      role: dto.role ?? 'USER',
    };
    const { data, error } = await this.supabase
      .from('User')
      .insert([insert])
      .select('*')
      .single();
    if (error) throw new InternalServerErrorException(error.message);
    return data as UserRow;
  }
}
