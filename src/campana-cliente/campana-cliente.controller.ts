import { Controller,Get,Post,Put,Delete, Res, HttpStatus, Body, Param,NotFoundException, Query, UseGuards } from '@nestjs/common';
import { CreateCampanaClienteDTO } from './dto/campana-cliente.dto';
import { CampanaClienteService } from './campana-cliente.service';

@Controller('campana-cliente')
export class CampanaClienteController {

    constructor(private campanaClienteService: CampanaClienteService){

    }

    @Post('/create')
    async createPost(@Res() res,@Body() createCampanaClientetDTO:CreateCampanaClienteDTO){
       const campanaCliente = await this.campanaClienteService.createCampanaCliente(createCampanaClientetDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Campanacliente Successfully Created',
            campanaCliente
        });
    }


    @Get('/') 
    async getUltimoCampanaCliente(@Res() res){
        const campanaCliente = await this.campanaClienteService.getUltimoCampanaCliente();
        if(!campanaCliente) throw new NotFoundException('CampanaCliente Not Found')
        return res.status(HttpStatus.OK).json(campanaCliente);

    }

   


}
