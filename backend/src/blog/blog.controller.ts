import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Database } from 'src/database.types';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';

type BlogPostRow = Database['public']['Tables']['BlogPost']['Row'];

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAll(): Promise<BlogPostRow[]> {
    return this.blogService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<BlogPostRow> {
    return this.blogService.getOne(id);
  }

  @Post()
  async create(@Body() dto: CreateBlogPostDto): Promise<BlogPostRow> {
    return this.blogService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBlogPostDto,
  ): Promise<BlogPostRow> {
    return this.blogService.update(id, dto);
  }
}
