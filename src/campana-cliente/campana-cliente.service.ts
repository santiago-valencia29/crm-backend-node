import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { CampanaCliente } from './interfaces/campana-cliente.interface';
import { CreateCampanaClienteDTO } from './dto/campana-cliente.dto';


@Injectable()
export class CampanaClienteService {

    constructor(@InjectModel('CampanaCliente') readonly campanaClienteModel: Model<CampanaCliente>){}

  
    async getCampanaCliente(campanaClienteID: string): Promise<CampanaCliente>{
        const campanaCliente = await this.campanaClienteModel.findById(campanaClienteID);
        return campanaCliente;
    }
    async createCampanaCliente(CreateCampanaClienteDTO: CreateCampanaClienteDTO): Promise<CampanaCliente>{
       const campanaCliente = new this.campanaClienteModel(CreateCampanaClienteDTO); 
       await campanaCliente.save()
        return campanaCliente;
    }


}
