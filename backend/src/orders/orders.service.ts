import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class OrdersService {
  constructor(@Inject('SUPABASE_CLIENT') private supabase: SupabaseClient) {}

  async getAllOrders() {
    const { data, error } = await this.supabase.from('Order').select('*');
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async createOrder(
    userId: string,
    artworkId: string,
    status: 'PENDING' | 'COMPLETED' | 'CANCELED' = 'PENDING',
  ) {
    const { data, error } = await this.supabase
      .from('Order')
      .insert([{ userId, artworkId, status }])
      .select();
    if (error) throw error;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data[0];
  }
}
