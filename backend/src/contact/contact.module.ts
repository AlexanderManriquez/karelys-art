import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { SupabaseModule } from 'src/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
