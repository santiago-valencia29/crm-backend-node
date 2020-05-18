import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser';

import * as helmet from 'helmet';
import { AnyExceptionFilter } from './exception-filters/any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb'}));
  app.useGlobalFilters(new AnyExceptionFilter());
  const corsOptions = {
    origin: [
      'http://localhost:4200'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  
  app.use(helmet());//security force conexion
  app.enableCors(); //acceder desde una app angular
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
