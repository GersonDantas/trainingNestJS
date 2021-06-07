import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, (): void => {
    console.log('open server and listening on port 3000');
  });
}
bootstrap();
