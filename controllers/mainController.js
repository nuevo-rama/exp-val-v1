//CONTROLADOR PARA RENDERIZAR EL INDEX

//Objeto literal con los métodos que van a manejar cada pedido en particular, en éste caso renderizar el index
const mainController = {
    
    index: (req,res)=>{
        res.render("./products/index")
    }
}

module.exports=mainController; //se exportará hacia routes