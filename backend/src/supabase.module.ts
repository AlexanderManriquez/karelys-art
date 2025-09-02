import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseProvider } from './supabase.provider';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [SupabaseProvider],
  exports: [SupabaseProvider],
})
export class SupabaseModule {}
