const db = require('../../database/models');
const path=require("path")

const productsApiController = {

    products:(req,res)=>{
        
        db.Productos.findAll()
        .then(products => {
            res.json({
                meta: {
                    status: 200,
                    length: products.length,
                    url: req.originalUrl
                },
                data: { ...products },
            })
            .catch(error=>res.send(error))
        })
    },
   
    detail:(req,res)=>{},
    store:(req,res)=>{},
    destroy:(req,res)=>{},
    productCart:(req,res)=>{},
    update:(req,res)=>{},
    create:(req,res)=>{},
    delete:(req,res)=>{},
    edit:(req,res)=>{}
    

}

module.exports = productsApiController;