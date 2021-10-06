const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const usuarioSchema = mongoose.Schema({

  "user_name": { type: String, required: [true, "El nombre es obligatorio."] },
  "user_email": { type: String, required: [true, "El email es obligatorio."] },
  "user_password": String,
  "user_phone": Number,
  "user_pubs": [{
    type: Schema.Types.ObjectId,
    ref:'MascotasModel'
  }],
  "user_adopts": [{
    type: Schema.Types.ObjectId,
    ref:'SolicitudesModel'
  }]

  //agregar las publicaciones y las adopciones joins
});

module.exports = mongoose.model("usuarios", usuarioSchema);