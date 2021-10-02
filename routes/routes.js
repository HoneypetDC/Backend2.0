const express = require("express");
const mascotasController = require("../controller/MascotasController");
const usuariosController = require("../controller/UsuariosController");
const solicitudesController = require("../controller/SolicitudesController");

const router = express.Router();

//Rutas Mascotas

router.get("/mascotas/all", mascotasController.getAllMascotas);
router.get("/mascotas/id/:id", mascotasController.getMascotaById);
router.get("/mascotas/:param1/:param2", mascotasController.getMascotaDosParametros);
router.delete("/mascotas/id/:id", mascotasController.deleteMascotaById);
router.post("/mascotas/", mascotasController.insertMascota);
router.put("/mascotas/id/:id", mascotasController.updateMascotaById);
//router.put("/mascotas/:id", mascotasController.replaceById)

//Rutas Usuarios

router.get("/usuarios/all", usuariosController.getAllUsuarios);
router.get("/usuarios/id/:id", usuariosController.getUsuariosById);
router.get("/usuarios/:param1/:param2", usuariosController.getUsuariosDosParametros);
router.delete("/usuarios/id/:id", usuariosController.deleteUsuariosById);
router.post("/usuarios/", usuariosController.insertUsuarios);
router.put("/usuarios/id/:id", usuariosController.updateUsuariosById);
router.put("/usuarios/:id", usuariosController.replaceUsuarioById)

//Rutas Usuarios

router.get("/solicitudes/all", solicitudesController.getAllSolicitudes);
router.get("/solicitudes/id/:id", solicitudesController.getSolicitudById);
router.get("/solicitudes/:param1/:param2", solicitudesController.getSolicitudDosParametros);
router.delete("/solicitudes/id/:id", solicitudesController.deleteSolicitudById);
router.post("/solicitudes/", solicitudesController.insertSolicitud);
router.put("/solicitudes/id/:id", solicitudesController.updateSolicitudById);
//router.put("/solicitudes/:id", solicitudesController.replaceSolicitudById)

module.exports = router;