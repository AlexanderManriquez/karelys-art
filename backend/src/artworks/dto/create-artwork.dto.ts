import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsOptional,
} from 'class-validator';

export class CreateArtworkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsOptional()
  description?: string;
}
