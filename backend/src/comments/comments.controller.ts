import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Database } from 'src/database.types';

type CommentRow = Database['public']['Tables']['Comment']['Row'];

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getAll(): Promise<CommentRow[]> {
    return this.commentsService.getAllComments();
  }

  @Post()
  async create(@Body() dto: CreateCommentDto): Promise<CommentRow> {
    return this.commentsService.createComment(dto);
  }
}
