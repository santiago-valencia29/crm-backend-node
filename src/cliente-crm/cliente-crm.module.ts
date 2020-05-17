import { Module } from '@nestjs/common';
import { ClienteCrmSchema } from './schemas/cliente-crm.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteCrmController } from './cliente-crm.controller';
import { ClienteCrmService } from './cliente-crm.service';



@Module({
    imports: [
        MongooseModule.forFeature(
            [
                { name: 'ClienteCrm', schema: ClienteCrmSchema }
            ]
        )

    ],
    providers: [ClienteCrmService],
    controllers: [ClienteCrmController]

})
export class ClienteCrmModule { }
