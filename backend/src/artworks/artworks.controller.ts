import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { CreateArtworkDto } from './dto/create-artwork.dto';

@Controller('artworks')
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get()
  async getAll() {
    return this.artworksService.getAllWorks();
  }

  @Post()
  async create(@Body() CreateArtworkDto: CreateArtworkDto) {
    return this.artworksService.createArtwork(CreateArtworkDto);
  }
}
