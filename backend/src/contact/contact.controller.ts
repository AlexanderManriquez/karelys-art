import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { Database } from 'src/database.types';

type ContactRow = Database['public']['Tables']['ContactMessage']['Row'];

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() dto: CreateContactDto): Promise<ContactRow> {
    return this.contactService.createMessage(dto);
  }

  @Get()
  async getAll(): Promise<ContactRow[]> {
    return this.contactService.getMessages();
  }
}
