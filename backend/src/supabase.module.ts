import { Global, Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

@Global()
@Module({
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useValue: supabase,
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}
