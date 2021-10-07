const mascotasModel = require("../model/MascotasModel");
const usuariosModel = require("../model/UsuariosModel");


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
      const id = request.params.id;
      await mascotasModel.deleteOne({ _id: id });
      response.status(200).json();
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async insertMascota(request, response) {
    try {
      const {
        publisher_id,
        pet_name,
        pet_pic,
        pet_thumb,
        pet_type,
        pet_description,
        pet_phone,
        pet_location,
        pet_request
      }= request.body;

      const publisher = await usuariosModel.findById(publisher_id)

      const newMascota = await mascotasModel.create({
        publisher_id: publisher._id,
        pet_name, 
        pet_pic,
        pet_thumb,
        pet_type,
        pet_description,
        pet_phone,
        pet_location,
        pet_request
      });

      const saveMascota = await newMascota.save()
      publisher.user_pubs = publisher.user_pubs.concat(saveMascota._id)
      await publisher.save()
      response.status(201).json(newMascota);
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


//----------------------------------------------------------------

// const mascotasModel = require("../model/MascotasModel");

// module.exports = class MascotasController {
//   static async getAllMascotas(request, response) {
//     try {
//       const result = await mascotasModel.find({});
//       response.status(200).json(result);
//     } catch (err) {
//       response.status(404).json({ message: err.message });
//     }
//   }

//   static async getMascotaById(request, response) {
//     try {
//       const id = request.params.id;
//       const result = await mascotasModel.findOne({ _id: id });
//       if (result != null) {
//         response.status(200).json(result);
//       } else {
//         response.status(404).json();
//       }
//     } catch (err) {
//       response.status(400).json({ message: err.message });
//     }
//   }

//   static async getMascotaDosParametros(request, response) {
//     try {
//       const p1 = request.params.param1;
//       const p2 = request.params.param2;
//       const result = await mascotasModel.find({
//         pet_type: p1,
//         pet_location: p2,
//       });
//       if (result != null) {
//         response.status(200).json(result);
//       } else {
//         response.status(404).json();
//       }
//     } catch (err) {
//       response.status(400).json({ message: err.message });
//     }
//   }

//   static async deleteMascotaById(request, response) {
//     try {
//       const id = request.params.id;
//       await mascotasModel.deleteOne({ _id: id });
//       response.status(200).json();
//     } catch (err) {
//       response.status(400).json({ message: err.message });
//     }
//   }

//   static async insertMascota(request, response) {
//     try {
//       const documento = request.body;
//       const newMascota = await mascotasModel.create(documento);
//       response.status(201).json(newMascota);
//     } catch (err) {
//       response.status(400).json({ message: err.message });
//     }
//   }

  

//   static async updateMascotaById(request, response) {
//     try {
//       const id = request.params.id;
//       const documento = request.body;
//       await mascotasModel.updateOne({ _id: id }, documento);
//       response.status(201).json();
//     } catch (err) {
//       response.status(400).json({ message: err.message });
//     }
//   }

//   static async replaceMascotaById(request, response) {
//     try {
//       const id = request.params.id;
//       await mascotasModel.updateOne({ _id: id }, { pet_name: "Ramon" });
//       response.status(201).json();
//     } catch (err) {
//       response.status(400).json({ message: err.message });
//     }
//   }
// };
