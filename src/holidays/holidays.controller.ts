import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holidays.dto';
import { HolidaysService } from './holidays.service';
import { HolidaysType } from './holidays-type.enum';
import { Holiday } from './holiday.entity';

@Controller('holidays')
export class HolidaysController {
  constructor(private holidaysService: HolidaysService) {}

  // @Get()
  // getAllHolidays() {
  //   return this.holidaysService.getAllHolidays();
  // }

  @Get('/:id')
  getHolidayById(@Param('id') id: number): Promise<Holiday> {
    return this.holidaysService.getHolidayById(id);
  }

  @Post()
  createHoliday(@Body() createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    return this.holidaysService.createHoliday(createHolidayDto);
  }

  @Delete('/:id')
  deleteHoliday(@Param('id') id: number): Promise<void> {
    return this.holidaysService.deleHoliday(id);
  }

  @Patch('/:id')
  updateHoliday(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('date') date: Date,
  ): Promise<Holiday> {
    return this.holidaysService.updateHoliday(id, name, date);
  }
}
