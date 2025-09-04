import {
  InternalServerErrorException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'src/database.types';
import { CreateOrderDto } from './dto/create-order.dto';

type OrderRow = Database['public']['Tables']['Order']['Row'];
type OrderInsert = Database['public']['Tables']['Order']['Insert'];

@Injectable()
export class OrdersService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient<Database>,
  ) {}

  async getAllOrders(): Promise<OrderRow[]> {
    const { data, error } = await this.supabase.from('Order').select('*');
    if (error) throw new InternalServerErrorException(error.message);
    return data ?? [];
  }

  async createOrder(dto: CreateOrderDto): Promise<OrderRow> {
    const insert: OrderInsert = {
      userid: dto.userId,
      artworkid: dto.artworkId,
      status: dto.status ?? 'PENDING',
    };
    const { data, error } = await this.supabase
      .from('Order')
      .insert([insert])
      .select('*')
      .single();
    if (error) throw new InternalServerErrorException(error.message);
    return data as OrderRow;
  }
}
