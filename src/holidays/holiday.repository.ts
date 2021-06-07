import { Entity, EntityRepository, Repository } from 'typeorm';
import { Holiday } from './holiday.entity';

@EntityRepository(Holiday)
export class HolidayRepository extends Repository<Holiday> {}
