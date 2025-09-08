import { Body, Controller, Post } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { Database } from 'src/database.types';

type ArtworkInsert = Database['public']['Tables']['Artwork']['Insert'];

@Controller('artworks-test')
export class ArtworksTestController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Post('create')
  async createArtwork(@Body() createArtworkDto: ArtworkInsert) {
    const artwork = await this.artworksService.createArtwork(createArtworkDto);
    return artwork;
  }
}
