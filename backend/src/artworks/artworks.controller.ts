import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArtworksService } from './artworks.service';

@Controller('artworks')
export class ArtwarksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get()
  async getAll() {
    return this.artworksService.getAllWorks();
  }

  @Post()
  async create(
    @Body()
    body: {
      title: string;
      price: number;
      imageUrl: string;
      description?: string;
    },
  ) {
    const { title, price, imageUrl, description } = body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.artworksService.createArtwork(
      title,
      price,
      imageUrl,
      description,
    );
  }
}
