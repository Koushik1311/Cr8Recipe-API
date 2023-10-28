import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const port = process.env.PORT;

  const app = await NestFactory.create(AppModule);

  // Define your CORS options
  // const corsOptions: CorsOptions = {
  //   origin: (origin, callback) => {
  //     if (origin && origin.endsWith('.vercel.app')) {
  //       callback(null, true);
  //     } else if (origin === 'http://127.0.0.1:5000') {
  //       callback(null, true);
  //       console.log(callback(null, true));
  //     } else {
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, // Enable sending credentials like cookies
  // };

  // app.enableCors(corsOptions);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
