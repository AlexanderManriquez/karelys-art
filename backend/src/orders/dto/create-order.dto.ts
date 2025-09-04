import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  artworkId: string;

  @IsOptional()
  @IsIn(['PENDING', 'COMPLETED', 'CANCELED'])
  status?: 'PENDING' | 'COMPLETED' | 'CANCELED';
}
