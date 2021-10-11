const mascotasModel = require("../model/MascotasModel");
const usuariosModel = require("../model/UsuariosModel");
const sharp = require('sharp')


module.exports = class MascotasController {
  static async getAllMascotas(request, response) {
    try {
      const result = await mascotasModel.find({});
      response.status(200).json(result);
    } catch (err) {
      response.status(404).json({ message: err.message });
    }
  }


  static async getLastMascotas(request, response) {
    try {
      const result = await mascotasModel.find({}).sort({$natural:-1}).limit(4);
      response.status(200).json(result);
    } catch (err) {
      response.status(404).json({ message: err.message });
    }
  }

  static async getMascotaById(request, response) {
    try {
      const id = request.params.id;
      const result = await mascotasModel.findOne({ _id: id });
      if (result != null) {
        response.status(200).json(result);
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  

  static async getMascotaDosParametros(request, response) {
    try {
      const p1 = request.params.param1;
      const p2 = request.params.param2;
      const result = await mascotasModel.find({
        pet_type: p1,
        pet_location: p2,
      });
      if (result != null) {
        response.status(200).json(result);
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async deleteMascotaById(request, response) {
    try {
      const idmascota = request.params.idmascota;
      const idpublisher = request.params.idpublisher;

      await mascotasModel.deleteOne({ _id: idmascota });

      const publisher = await usuariosModel.findById(idpublisher);
      const posMascota = await publisher.user_pubs.indexOf(idmascota) 

      console.log(publisher);

      publisher.user_pubs.splice(posMascota,1);
      await publisher.save()
      response.status(200).json('Mascota eliminada');
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async insertMascota(request, response) {

    const editImage =(filePath,filename, size) => {
      return sharp(filePath)
        .resize(size,size)
        .toFile(`./thumbs/${filename}`)
    }

    try {

      const {
        publisher_id,
        pet_name,
        pet_type,
        pet_description,
        pet_phone,
        pet_location,
        pet_request
      }= request.body;

      editImage(request.file.path,`pet-${request.file.filename}`,350)

      const publisher = await usuariosModel.findById(publisher_id)

      const newMascota = await mascotasModel.create({
        publisher_id:publisher_id,
        pet_name, 
        pet_pic: request.file.path,
        pet_thumb:`./opt/pet-${request.file.filename}`,
        pet_type,
        pet_description,
        pet_phone,
        pet_location,
        pet_request
      });
      const saveMascota = await newMascota.save()
      publisher.user_pubs = publisher.user_pubs.concat(saveMascota._id)
      await publisher.save()
      response.status(201).json("todo bien");
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  

  static async updateMascotaById(request, response) {
    try {
      const id = request.params.id;
      const documento = request.body;
      await mascotasModel.updateOne({ _id: id }, documento);
      response.status(201).json();
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async replaceMascotaById(request, response) {
    try {
      const id = request.params.id;
      await mascotasModel.updateOne({ _id: id }, { pet_name: "Ramon" });
      response.status(201).json();
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }
};

