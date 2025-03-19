import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCountedDto } from './dto/counted-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('cadastrarcontagem')
  cadastrarContagem(@Body() data: CreateCountedDto[] ): Promise<boolean>{
    return this.appService.addCounted(data);
  }

  @Get('buscarregistros')
  buscarContagem(@Query('data') data: string): Promise<CreateCountedDto[]>{
    console.log(data)
    return this.appService.buscarRegistros(data)
  }
}
