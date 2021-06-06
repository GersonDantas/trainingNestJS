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
import { Holiday } from './holidays.model';

@Controller('holidays')
export class HolidaysController {
  constructor(private holidaysService: HolidaysService) {}

  @Get()
  getAllHolidays() {
    return this.holidaysService.getAllHolidays();
  }

  @Get('/:id')
  getHolidayById(@Param('id') id: string) {
    return this.holidaysService.getHolidayById(id);
  }

  @Post()
  createHoliday(@Body() createHoliday: CreateHolidayDto) {
    return this.holidaysService.createHoliday(createHoliday);
  }

  @Delete('/:id')
  deleteHoliday(@Param('id') id: string) {
    this.holidaysService.deleHoliday(id);
  }

  @Patch('/:id')
  updateHoliday(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('date') date: Date,
  ): Holiday {
    return this.holidaysService.updateHoliday(id, name, date);
  }
}
