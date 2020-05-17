import { Module } from '@nestjs/common';
import { CampanaClienteController } from './campana-cliente.controller';
import { CampanaClienteService } from './campana-cliente.service';
import { MongooseModule } from '@nestjs/mongoose'
import { CampanaClienteSchema } from './schemas/campana-cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'CampanaCliente', schema: CampanaClienteSchema }
      ]
    )

  ],
  controllers: [CampanaClienteController],
  providers: [CampanaClienteService]
})
export class CampanaClienteModule { }
