import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 3301;
  const isProduction = process.env.NODE_ENV === 'production';

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  let allowedOrigins: string[];

  if (isProduction) {
    allowedOrigins = [
      process.env.CORS_ALLOW_ORIGIN_PROD || 'https://cr8recipe.vercel.app/',
    ];
  } else {
    allowedOrigins = [
      process.env.CORS_ALLOW_ORIGIN_DEV || 'http://localhost:3000',
    ];
  }

  const corsOptions: CorsOptions = {
    origin: allowedOrigins,
  };

  app.enableCors(corsOptions);

  await app.listen(port);
}
bootstrap();
