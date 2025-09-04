import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/database.types';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';

type BlogPostRow = Database['public']['Tables']['BlogPost']['Row'];
type BlogPostInsert = Database['public']['Tables']['BlogPost']['Insert'];
type BlogPostUpdate = Database['public']['Tables']['BlogPost']['Update'];

@Injectable()
export class BlogService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient<Database>,
  ) {}

  async getAll(): Promise<BlogPostRow[]> {
    const { data, error } = await this.supabase.from('BlogPost').select('*');
    if (error) throw new InternalServerErrorException(error.message);
    return data ?? [];
  }

  async getOne(id: string): Promise<BlogPostRow> {
    const { data, error } = await this.supabase
      .from('BlogPost')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new InternalServerErrorException(error.message);
    return data as BlogPostRow;
  }

  async create(dto: CreateBlogPostDto): Promise<BlogPostRow> {
    const insert: BlogPostInsert = {
      title: dto.title,
      content: dto.content,
      authorid: dto.authorId,
      publishedat: dto.publishedAt ? dto.publishedAt.toISOString() : null,
    };
    const { data, error } = await this.supabase
      .from('BlogPost')
      .insert([insert])
      .select('*')
      .single();
    if (error) throw new InternalServerErrorException(error.message);
    return data as BlogPostRow;
  }

  async update(id: string, dto: UpdateBlogPostDto): Promise<BlogPostRow> {
    const update: BlogPostUpdate = {
      ...dto,
      publishedat: dto.publishedAt ? dto.publishedAt.toISOString() : undefined,
    };
    const { data, error } = await this.supabase
      .from('BlogPost')
      .update(update)
      .eq('id', id)
      .select('*')
      .single();
    if (error) throw new InternalServerErrorException(error.message);
    return data as BlogPostRow;
  }
}
