const mongoose = require("mongoose");

const mascotasSchema = mongoose.Schema({
    "pet_name": {
        type: String,
        required: [true, "El nombre de la mascota es obligatorio"],
      },
    "pet_pic": { type: String, required: [true, "La foto es obligatoria"] },
    "pet_thum": { type: String, required: true },
    "pet_type": { type: String, required: true },
    "pet_description": {
        type: String,
        required: [true, "La descripción es obligatorio"],
      },
    "pet_phone": { type: Number, required: [true, "El telefono es obligatorio"] },
    "pet_location": {
        type: String,
        required: [true, "La ubicacion es obligatoria"],
      }
});

module.exports = mongoose.model("mascotas", mascotasSchema);