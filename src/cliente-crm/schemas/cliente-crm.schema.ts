import { Schema } from 'mongoose';

export const ClienteCrmSchema = new Schema({
    nombre: {
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    codigoCampana:{
        type:String,
        required:true
    }

},{
    timestamps:true
});