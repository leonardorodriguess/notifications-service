import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    // console.log(body);
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        ...body,
      },
    });
  }
}
