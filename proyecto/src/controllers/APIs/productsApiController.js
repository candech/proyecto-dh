const db = require('../../database/models');
const path = require("path")

const productsApiController = {

    products: async(req,res)=>{
        try {
            let products = await db.Productos.findAll({include:["category"]})
            let categories = await db.Categoria.findAll({include:["products"]})
            //const imageUrl = `${req.protocol}://${req.get('host')}/img/products/${products.image}`;
            const countByCategory = {}
            categories.map(category => {
                countByCategory[category.code] = category.products.length
            });
            const dataProducts = products.map(product =>{
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    description: product.description,
                    image: `http://localhost:3002/img/products/${product.image}`,
                    detail: `http://localhost:3002/products/${product.detail}`
                }
            })
            console.log(countByCategory)
                    return res.json({
                        meta:{
                            status: 200,
                            count: products.length,
                            detail: req.originalUrl,
                            countByCategory: countByCategory,
                        },
                        data: dataProducts
                    })
                } catch (error) {
                    console.log(error.message)
                }
            },
            
            detail: async(req,res)=>{
                try {
                    let product = await db.Productos.findByPk(req.params.id,
                        {include: ['category']}
                        )
                        
            return res.status(200).json({
                meta:{
                status: 200,
                url: req.originalUrl
            },
                data: {
                    product,
                    image: `http://localhost:3002/img/products/${product.image}`
            }
        })
        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = productsApiController;