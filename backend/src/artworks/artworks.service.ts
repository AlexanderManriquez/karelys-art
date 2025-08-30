import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class ArtworksService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async getAllWorks() {
    const { data, error } = await this.supabase.from('Artwork').select('*');
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async createArtwork(
    title: string,
    price: number,
    imageUrl: string,
    description?: string,
  ) {
    const { data, error } = await this.supabase
      .from('Artwork')
      .insert([{ title, price, imageUrl, description }])
      .select();
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data[0];
  }
}
