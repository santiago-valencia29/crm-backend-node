import { Schema } from 'mongoose';

export const CampanaClienteSchema = new Schema({
    codigo: {
        type:String,
        required:true
    },
    descripcion:String
});