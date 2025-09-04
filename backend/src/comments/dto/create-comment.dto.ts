import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  artworkId: string;

  @IsNotEmpty()
  content: string;
}
