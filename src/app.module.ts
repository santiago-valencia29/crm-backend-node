import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampanaClienteModule } from './campana-cliente/campana-cliente.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot
      ('mongodb+srv://dbSantiago:santti9312@santiagocluster-vrusr.mongodb.net/portafolio?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
        }),
        CampanaClienteModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService],
})
export class AppModule { }
