const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const solicitudesSchema = mongoose.Schema({

    "date": { type: Date, required: true, default: Date.now },
    "pet": Object, //to do join
    "candidate_id": {
      type: Schema.Types.ObjectId,
      ref:'UsuariosModel'
    }, //to do join
    "reqs_state": { type: String, default: "En estudio" }
  
    //agregar las publicaciones y las adopciones joins
  });
  
  module.exports = mongoose.model("solicitudes", solicitudesSchema);