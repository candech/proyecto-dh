const db = require('../database/models');
const { Op } = require('sequelize');
const mainControllers = {
//muestra todos los productos
    index: (req, res) =>{
        try {
            db.Productos.findAll()
            .then((products)=>{
                return res.render('index',{products: products})
            })
         } catch (error) {
            res.send(error.message)
         }
    },
    search: async(req, res)=>{
		try {
			const resultSearch = await db.Productos.findAll({
				where: {
					name: {
						[Op.like] :`%${req.query.keyword}%`
					},
				}
			});
			res.render('results', { resultSearch });
		} catch (error) {
			res.send(error.message)
		}
	}

};

module.exports = mainControllers;