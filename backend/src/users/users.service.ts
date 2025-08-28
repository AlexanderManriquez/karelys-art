import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class UsersService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabaseClient: SupabaseClient,
  ) {}

  async getAllUsers() {
    const { data, error } = await this.supabaseClient.from('User').select('*');
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async createUser(
    email: string,
    name?: string,
    role: 'USER' | 'ADMIN' = 'USER',
  ) {
    const { data, error } = await this.supabaseClient
      .from('User')
      .insert([{ email, name, role }])
      .select();
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data[0];
  }
}
