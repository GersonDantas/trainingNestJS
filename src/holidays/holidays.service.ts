import { Injectable, NotFoundException } from '@nestjs/common';
import { HolidaysType } from './holidays-type.enum';
import { CreateHolidayDto } from './dto/create-holidays.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayRepository } from './holiday.repository';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidaysService {
  constructor(
    @InjectRepository(HolidayRepository)
    private holidayRepository: HolidayRepository,
  ) {}

  // getAllHolidays() {
  //   return this.holidays;
  // }

  async createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    return this.holidayRepository.createHoliday(createHolidayDto);
  }

  async getHolidayById(id: number): Promise<Holiday> {
    const found = await this.holidayRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Feriado ${id} Não encontrado`);
    }

    return found;
  }

  // getHolidayById(id: string): Holiday {
  //   return this.holidays.find((holiday) => holiday.id == id);
  // }

  async deleHoliday(id: number): Promise<void> {
    const result = await this.holidayRepository.delete(id);
    console.log(result);
  }

  async updateHoliday(id: number, name: string, date: Date): Promise<Holiday> {
    const holiday = await this.getHolidayById(id);
    holiday.name = name;
    holiday.date = date;

    await holiday.save();
    return holiday;
  }
}
