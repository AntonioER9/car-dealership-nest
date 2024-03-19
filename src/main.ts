import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //remueve campos que no forman parte del dto
      forbidNonWhitelisted: true,//envia un error por incluir campos que no existen
    })
  )

  await app.listen(3000);
}
bootstrap();
