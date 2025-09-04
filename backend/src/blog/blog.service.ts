import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { BlogPost } from './entities/blog-post.entity';

@Injectable()
export class BlogService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async getAll(): Promise<BlogPost[]> {
    const { data, error } = await this.supabase.from('BlogPost').select('*');
    if (error) throw new Error(error.message);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async getOne(id: string): Promise<BlogPost> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, error } = await this.supabase
      .from('BlogPost')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }
}
