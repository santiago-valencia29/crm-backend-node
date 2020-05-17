import { Document} from 'mongoose';

export interface CampanaCliente extends Document{
    readonly codigo: string;
    readonly descripcion:string;
}