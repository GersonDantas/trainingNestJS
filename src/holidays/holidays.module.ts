import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayRepository } from './holiday.repository';
import { HolidaysController } from './holidays.controller';
import { HolidaysService } from './holidays.service';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayRepository])],
  controllers: [HolidaysController],
  providers: [HolidaysService],
})
export class HolidaysModule {}
