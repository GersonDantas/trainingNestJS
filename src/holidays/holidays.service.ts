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
    const { name, date } = createHolidayDto;

    const holiday = new Holiday();

    holiday.name = name;
    holiday.date = date;
    holiday.type = HolidaysType.NACIONAL;

    await holiday.save(); //F5 no dataBase

    return holiday;
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
  // deleHoliday(id: string): void {
  //   this.holidays = this.holidays.filter((holiday) => holiday.id !== id);
  // }
  // updateHoliday(id: string, name: string, date: Date): Holiday {
  //   const holiday = this.getHolidayById(id);
  //   holiday.name = name;
  //   holiday.date = date;
  //   return holiday;
  // }
}
