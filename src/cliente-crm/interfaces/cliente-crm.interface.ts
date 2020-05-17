import { Document } from 'mongoose';

export interface ClienteCrm extends Document {
    readonly nombre: string;
    readonly apellido: string;
    readonly telefono: string;
    readonly direccion: string;
    readonly codigoCampana:string;

}
