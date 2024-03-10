const productosController = {
    detalle: function (req, res) {
        if (req.params.idProducto == undefined){
            res.send("Bienvenidos a los detalles del producto")
        }else{
            res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
        }
    },
    comentarios: function (req, res){
        if (req.params.idComentario == undefined) {
            res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto)
        } else {
            res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + ". Cometario N°. " + req.params.idComentario);
        }
    },
};

module.exports = productosController;