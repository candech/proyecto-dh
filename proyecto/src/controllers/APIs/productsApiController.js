const db = require('../../database/models');
const path = require("path")

const productsApiController = {

    products: async(req,res)=>{
        try {
            let products = await db.Productos.findAll(
                {include: ['category']}
            )
            //let categories = await db.Categoria.findAll()
            return res.json({
                meta:{
                    status: 200,
                    count: products.length,
                    detail: req.originalUrl,
                },
                /* countByCategory:{
                    categories:{
                        inSale: inSale.length
                    }
                }, */
                data: {...products},
               })
        } catch (error) {
            console.log(error.message)
        }
    },
   
    detail: async(req,res)=>{
        try {
            let product = await db.Productos.findByPk(req.params.id)
            const imageUrl = `${req.protocol}://${req.get('host')}/img/products/${product.image}`;
            return res.status(200).json({
                meta:{
                status: 200,
                url: req.originalUrl
            },
            data: {
                product,
                image: imageUrl
            }
        })
        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = productsApiController;