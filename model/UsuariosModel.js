const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({

  "_id": Object,
  "user_name": { type: String, required: [true, "El nombre es obligatorio."] },
  "user_email": { type: String, required: [true, "El email es obligatorio."] },
  "user_phone": String,
  "no_pubs": Number,
  "no_adopts": Number

  //agregar las publicaciones y las adopciones joins
});

module.exports = mongoose.model("usuarios", usuarioSchema);