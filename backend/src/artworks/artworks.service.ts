import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/database.types';

// Definimos los tipos directamente desde database.types.ts
type ArtworkRow = Database['public']['Tables']['Artwork']['Row'];
type ArtworkInsert = Database['public']['Tables']['Artwork']['Insert'];
type ArtworkUpdate = Database['public']['Tables']['Artwork']['Update'];

@Injectable()
export class ArtworksService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient<Database>,
  ) {}

  async getAllWorks(): Promise<ArtworkRow[]> {
    const { data, error } = await this.supabase.from('Artwork').select('*'); // devuelve ArtworkRow[]

    if (error) throw new InternalServerErrorException(error.message);
    return data ?? [];
  }

  async createArtwork(createArtworkDto: ArtworkInsert): Promise<ArtworkRow> {
    const { data, error } = await this.supabase
      .from('Artwork')
      .insert([createArtworkDto])
      .select('*')
      .single();

    if (error) throw new InternalServerErrorException(error.message);
    return data as ArtworkRow;
  }

  async updateArtwork(
    id: string,
    updateArtworkDto: ArtworkUpdate,
  ): Promise<ArtworkRow> {
    const { data, error } = await this.supabase
      .from('Artwork')
      .update(updateArtworkDto)
      .eq('id', id)
      .select('*')
      .single();

    if (error) throw new InternalServerErrorException(error.message);
    return data as ArtworkRow;
  }

  async deleteArtwork(id: string): Promise<void> {
    const { error } = await this.supabase.from('Artwork').delete().eq('id', id);

    if (error) throw new InternalServerErrorException(error.message);
  }

  async getFilteredWorks(
    page = 1,
    limit = 12,
    category?: string,
  ): Promise<ArtworkRow[]> {
    const offset = (page - 1) * limit;

    let query = this.supabase
      .from('Artwork')
      .select('*')
      .range(offset, offset + limit - 1);

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) throw new InternalServerErrorException(error.message);
    return data ?? [];
  }
}
