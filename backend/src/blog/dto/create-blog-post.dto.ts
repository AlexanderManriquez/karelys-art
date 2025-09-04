export class CreateBlogPostDto {
  title: string;
  content: string;
  authorId: string;
  publishedAt?: Date;
}
