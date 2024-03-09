const db = require('../../database/models');

const productsApiController = {

    products:(req,res)=>{
        db.Product.findAll()
        .then(products => {
            res.json({
                
            })
        })
    },
    create:(req,res)=>{},
    store:(req,res)=>{},
    detail:(req,res)=>{},
    edit:(req,res)=>{},
    update:(req,res)=>{},
    delete:(req,res)=>{},
    destroy:(req,res)=>{},
    productCart:(req,res)=>{}

}

module.exports = productsApiController;