export class BlogPost {
  id: string;
  authorId: string;
  title: string;
  content: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
