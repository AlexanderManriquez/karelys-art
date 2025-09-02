import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class CommentsService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async getAllComments() {
    const { data, error } = await this.supabase.from('Comment').select('*');
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async createComment(userId: string, artworkId: string, content: string) {
    const { data, error } = await this.supabase
      .from('Comment')
      .insert([{ userId, artworkId, content }])
      .select();
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data[0];
  }
}
