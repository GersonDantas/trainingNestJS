import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { HolidaysModule } from './holidays/holidays.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), HolidaysModule],
})
export class AppModule {}
