import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

export const SupabaseProvider = {
  provide: 'SUPABASE_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): SupabaseClient<Database> => {
    const supabaseUrl = configService.get<string>('SUPABASE_URL');
    const supabaseKey = configService.get<string>('SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('URL & KEY Not Defined in .env');
    }

    return createClient<Database>(supabaseUrl, supabaseKey);ñ
  },
};
