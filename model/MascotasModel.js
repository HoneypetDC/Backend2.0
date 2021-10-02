const mongoose = require("mongoose");

const mascotasSchema = mongoose.Schema({
    "_id": Object,
    "pet_name":String,
    "pet_location":String,
    "pet_type":String
});

module.exports = mongoose.model("mascotas", mascotasSchema);