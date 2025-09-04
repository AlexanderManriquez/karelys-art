import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Database } from 'src/database.types';

type OrderRow = Database['public']['Tables']['Order']['Row'];

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAll(): Promise<OrderRow[]> {
    return this.ordersService.getAllOrders();
  }

  @Post()
  async create(@Body() dto: CreateOrderDto): Promise<OrderRow> {
    return this.ordersService.createOrder(dto);
  }
}
