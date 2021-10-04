const solicitudesModel = require("../model/SolicitudesModel");

module.exports = class SolicitudesController {
  static async getAllSolicitudes(request, response) {
    try {
      const result = await solicitudesModel.find({});
      response.status(200).json(result);
    } catch (err) {
      response.status(404).json({ message: err.message });
    }
  }

  static async getSolicitudById(request, response) {
    try {
      const id = request.params.id;
      const result = await solicitudesModel.findOne({ _id: id });
      if (result != null) {
        response.status(200).json(result);
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(404).json({ message: err.message });
    }
  }

  static async getSolicitudDosParametros(request, response) {
    try {
      const p1 = request.params.param1;
      const p2 = request.params.param2;
      const result = await solicitudesModel.find({
        pet_name: p1,
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

  static async deleteSolicitudById(request, response) {
    try {
      const id = request.params.id;
      await solicitudesModel.deleteOne({ _id: id });
      response.status(200).json();
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async insertSolicitud(request, response) {
    try {
      const documento = request.body;
      const newMascota = await solicitudesModel.create(documento);
      response.status(201).json(newMascota);
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async updateSolicitudById(request, response) {
    try {
      const id = request.params.id;
      const documento = request.body;
      await solicitudesModel.updateOne({ _id: id }, documento);
      response.status(201).json();
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }

  static async replaceSolicitudById(request, response) {
    try {
      const id = request.params.id;
      await solicitudesModel.updateOne({ _id: id }, { pet_name: "Ramon" });
      response.status(201).json();
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  }
};
