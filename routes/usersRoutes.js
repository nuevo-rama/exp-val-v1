//CARPETA DE RECURSOS PARA USUARIOS
const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {body} = require("express-validator"); //requerimos express validator

const validations = [
    body ("firstName").notEmpty(),
    body ("lastName").notEmpty(),
    body ("email").notEmpty().isEmail(),
    body ("password").notEmpty(),
];

router.get("/users/login", userController.login);
router.post("/users/login", validations, userController.login); //revisar el userController.login


router.get("/users/register", userController.register);
router.post("/users/register", validations, userController.register); //revisar el userController.register

module.exports=router;