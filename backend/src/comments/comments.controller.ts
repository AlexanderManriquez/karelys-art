import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getAll() {
    return this.commentsService.getAllComments();
  }

  @Post()
  async create(
    @Body()
    body: {
      userId: string;
      artworkId: string;
      content: string;
    },
  ) {
    const { userId, artworkId, content } = body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.commentsService.createComment(userId, artworkId, content);
  }
}
