import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { ClienteCrmService } from './cliente-crm.service';
import { CreateClienteCrmDTO } from './dto/cliente-crm.dto';

@Controller('clientecrm')
export class ClienteCrmController {


    constructor(private clienteCrmService: ClienteCrmService) {}

    @Post('/save-clientecrm')
    async createPost(@Res() res, @Body() createClienteCrmDTO: CreateClienteCrmDTO[]) {
        // console.log(createClienteCrmDTO);
        const cliente = await this.clienteCrmService.createCliente(createClienteCrmDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Clientes cargados al CRM correctamente.',
            cliente
        });
    }
}

