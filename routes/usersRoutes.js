//CARPETA DE RECURSOS PARA USUARIOS
const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/login", userController.login);
router.get("/users/register", userController.register);

module.exports=router;