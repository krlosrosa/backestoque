import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCountedDto } from './dto/counted-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('addcontagem')
  getHello(@Body() data: CreateCountedDto[] ): Promise<boolean>{
    return this.appService.addCounted(data);
  }
}
