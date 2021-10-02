const express = require("express");
const mascotasController = require("../controller/MascotasController");

const router = express.Router();

//Rutas Mascotas

router.get("/mascotas/all", mascotasController.getAll);
router.get("/mascotas/:id", mascotasController.getById);
router.get("/mascotas/:param1/:param2", mascotasController.getP12);
router.delete("/mascotas/:id", mascotasController.deleteById);
router.post("/mascotas/", mascotasController.create);
router.put("/mascotas/:id", mascotasController.updateById);
//router.put("/mascotas/:id", mascotasController.replaceById)

module.exports = router;