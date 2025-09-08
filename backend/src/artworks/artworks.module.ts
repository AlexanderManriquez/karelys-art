import { Module } from '@nestjs/common';
import { ArtworksController } from './artworks.controller';
import { ArtworksService } from './artworks.service';
import { SupabaseModule } from 'src/supabase.module';
import { ArtworksTestController } from './artworks-test.controller';

@Module({
  imports: [SupabaseModule],
  controllers: [ArtworksController, ArtworksTestController],
  providers: [ArtworksService],
})
export class ArtworksModule {}
