import { Database } from 'src/database.types';
import { ArtworksService } from './artworks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

type ArtworkRow = Database['public']['Tables']['Artwork']['Row'];
type ArtworkInsert = Database['public']['Tables']['Artwork']['Insert'];
type ArtworkUpdate = Database['public']['Tables']['Artwork']['Update'];

@Controller('artworks')
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get()
  async getAll(): Promise<ArtworkRow[]> {
    return this.artworksService.getAllWorks();
  }

  @Post()
  async create(@Body() dto: ArtworkInsert): Promise<ArtworkRow> {
    return this.artworksService.createArtwork(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: ArtworkUpdate,
  ): Promise<ArtworkRow> {
    return this.artworksService.updateArtwork(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.artworksService.deleteArtwork(id);
    return { message: `Artwork ${id} deleted successfully` };
  }
}
