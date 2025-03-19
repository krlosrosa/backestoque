import { Injectable } from '@nestjs/common';
import { PrismaService } from './data/prisma.service';
import { CreateCountedDto } from './dto/counted-dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async addCounted(data: CreateCountedDto[]): Promise<boolean> {
    const response = await this.prisma.counted.createMany({
      data: data
    })
    if(response.count > 0) return true
    return false
  }
}