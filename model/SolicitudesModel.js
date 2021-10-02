const mongoose = require("mongoose");

const solicitudesSchema = mongoose.Schema({

    "_id":Object,
    "date": { type: Date, required: true, default: Date.now },
    "pet_id": String, //to do join
    "candidate_id": String, //to do join
    "reqs_state": { type: String, default: "En estudio" }
  
    //agregar las publicaciones y las adopciones joins
  });
  
  module.exports = mongoose.model("solicitudes", solicitudesSchema);