import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { single } from 'rxjs/internal/operators/single';

@Injectable()
export class ArtworksService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async getAllWorks() {
    const { data, error } = await this.supabase.from('Artwork').select('*');
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async createArtwork(CreateArtworkDto: CreateArtworkDto) {
    const { data, error } = await this.supabase
      .from('Artwork')
      .insert([CreateArtworkDto])
      .select()
      .single();
    if (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
