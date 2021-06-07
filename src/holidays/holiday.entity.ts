import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HolidaysType } from './holidays-type.enum';

@Entity()
export class Holiday extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  type: HolidaysType;
}
