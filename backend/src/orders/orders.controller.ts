import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('artworks')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAll() {
    return this.ordersService.getAllOrders();
  }

  @Post()
  async create(
    @Body()
    body: {
      userId: string;
      artworkId: string;
      status: 'PENDING' | 'COMPLETED' | 'CANCELED';
    },
  ) {
    const { userId, artworkId, status = 'PENDING' } = body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.ordersService.createOrder(userId, artworkId, status);
  }
}
