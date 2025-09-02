import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { Artwork } from './entities/artwork.entity';

@Injectable()
export class ArtworksService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async getAllWorks(): Promise<Artwork[]> {
    const { data, error } = await this.supabase
      .from('Artwork')
      .select<'*', Artwork>('*');
    if (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async createArtwork(createArtworkDto: CreateArtworkDto): Promise<Artwork> {
    const { data, error } = await this.supabase
      .from('Artwork')
      .insert([createArtworkDto])
      .select<'*', Artwork>()
      .single();
    if (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
