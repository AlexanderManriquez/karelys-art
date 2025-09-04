import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/database.types';
import { CreateCommentDto } from './dto/create-comment.dto';

type CommentRow = Database['public']['Tables']['Comment']['Row'];
type CommentInsert = Database['public']['Tables']['Comment']['Insert'];

@Injectable()
export class CommentsService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient<Database>,
  ) {}

  async getAllComments(): Promise<CommentRow[]> {
    const { data, error } = await this.supabase.from('Comment').select('*');
    if (error) throw new InternalServerErrorException(error.message);
    return data ?? [];
  }

  async createComment(dto: CreateCommentDto): Promise<CommentRow> {
    const insert: CommentInsert = {
      userid: dto.userId,
      artworkid: dto.artworkId,
      content: dto.content,
    };
    const { data, error } = await this.supabase
      .from('Comment')
      .insert([insert])
      .select('*')
      .single();
    if (error) throw new InternalServerErrorException(error.message);
    return data as CommentRow;
  }
}
// ...existing code up to previous CommentsService definition...
