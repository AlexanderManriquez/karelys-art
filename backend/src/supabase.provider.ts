import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

export const SupabaseProvider = {
  provide: 'SUPABASE_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const supabaseUrl = configService.get<string>('SUPABASE_URL');
    const supabaseKey = configService.get<string>('SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('URL & KEY Not Defined in .env');
    }

    return createClient(supabaseUrl, supabaseKey);
  },
};
