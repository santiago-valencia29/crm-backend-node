import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { ClienteCrm } from './interfaces/cliente-crm.interface';
import { CreateClienteCrmDTO } from './dto/cliente-crm.dto';



@Injectable()
export class ClienteCrmService {

    constructor(@InjectModel('ClienteCrm') readonly clienteModel: Model<ClienteCrm>){}

    async createCliente(CreateClienteCrmDTO: CreateClienteCrmDTO): Promise<ClienteCrm>{
        const cliente = new this.clienteModel(CreateClienteCrmDTO);
        await cliente.save();
        return cliente;
     }




}
