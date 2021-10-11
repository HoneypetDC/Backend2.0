const express = require("express");
const mascotasController = require("../controller/MascotasController");
const usuariosController = require("../controller/UsuariosController");
const emailController = require("../controller/EmailController");
const solicitudesController = require("../controller/SolicitudesController");
const multer = require("multer");
const { response, request } = require("express");

const storageConfi = multer.diskStorage({
    destination: (require, file, cb)=>{
        cb(null, "./uploads")
        
    },
    filename: (request,file,cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.png`)
        
    }
})

const router = express.Router();
const upload = multer({storage:storageConfi})

//Rutas Mascotas

router.get("/mascotas/all", mascotasController.getAllMascotas);
router.get("/mascotas/last", mascotasController.getLastMascotas);
router.get("/mascotas/id/:id", mascotasController.getMascotaById);
router.get("/mascotas/:param1/:param2", mascotasController.getMascotaDosParametros);
router.delete("/mascotas/:idmascota/:idpublisher", mascotasController.deleteMascotaById);
router.post("/mascotas",upload.single("image"), mascotasController.insertMascota);
router.put("/mascotas/id/:id", mascotasController.updateMascotaById);
//router.put("/mascotas/:id", mascotasController.replaceById)

//Rutas Usuarios

router.get("/usuarios/all", usuariosController.getAllUsuarios);
router.get("/usuarios/id/:id", usuariosController.getUsuariosById);
router.get("/usuarios/email/:email", usuariosController.getUsuariosByEmail);
//router.get("/usuarios/:param1/:param2", usuariosController.getUsuariosDosParametros);
router.delete("/usuarios/id/:id", usuariosController.deleteUsuariosById);
router.post("/usuarios/", usuariosController.createUsuarios);
router.put("/usuarios/id/:id/", usuariosController.updateUsuariosById);
//router.put("/usuarios/:id", usuariosController.replaceUsuarioById)

//Rutas Solicitudes

router.get("/solicitudes/all", solicitudesController.getAllSolicitudes);
router.get("/solicitudes/id/:id", solicitudesController.getSolicitudById);
router.get("/solicitudes/:param1/:param2", solicitudesController.getSolicitudDosParametros);
router.delete("/solicitudes/id/:id", solicitudesController.deleteSolicitudById);
router.post("/solicitudes/", solicitudesController.insertSolicitud);
router.put("/solicitudes/id/:id", solicitudesController.updateSolicitudById);
//router.put("/solicitudes/:id", solicitudesController.replaceSolicitudById)

//Rutas Emails
router.post("/email/", emailController.main);



module.exports = router;