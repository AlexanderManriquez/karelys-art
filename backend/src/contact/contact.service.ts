import { SupabaseClient } from '@supabase/supabase-js';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Database } from 'src/database.types';

type ContactRow = Database['public']['Tables']['ContactMessage']['Row'];

@Injectable()
export class ContactService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient<Database>,
  ) {}
  async createMessage(dto: CreateContactDto) {
    const { data, error } = await this.supabase
      .from('ContactMessage')
      .insert([dto])
      .select()
      .single();
    if (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async getMessages(): Promise<ContactRow[]> {
    const { data, error } = await this.supabase
      .from('ContactMessage')
      .select('*');

    if (error) throw new InternalServerErrorException(error.message);

    return data ?? [];
  }
}
