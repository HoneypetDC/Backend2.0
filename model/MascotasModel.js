const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const mascotasSchema = mongoose.Schema({
    
    "publisher_id": {
      type: Schema.Types.ObjectId,
      ref:'UsuariosModel',
      required: [true, "El id del publisher es obligatorio"],
    },
    "pet_name": {
        type: String,
        required: [true, "El nombre de la mascota es obligatorio"],
      },
    "pet_pic": { type: String, required: [true, "La foto es obligatoria"] },
    "pet_thumb": { type: String, required: true },
    "pet_type": { type: String, required: true },
    "pet_description": {
        type: String,
        required: [true, "La descripción es obligatorio"],
      },
    "pet_phone": { type: Number, required: [true, "El telefono es obligatorio"] },
    "pet_location": {
        type: String,required: [true, "La ubicacion es obligatoria"]
      },
    "pet_request": [{
      type: Schema.Types.ObjectId,
      ref:'SolicitudesModel'
    }]
});

module.exports = mongoose.model("mascotas", mascotasSchema);