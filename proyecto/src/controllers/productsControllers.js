const fs = require('fs');
//const { Module } = require('module');
const path = require('path');

const db = require('../database/models');
const category = require('../database/models/category');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  //toma un número como entrada y devuelve una cadena con el número formateado con comas como separadores de miles

const productsControllers ={
	products: (req, res) =>{
	 try {
		db.Productos.findAll()
		.then((products)=>{
			return res.render('products',{products: products})
		})
	 } catch (error) {
		res.send(error.message)
	 }
    },	

    create: async(req, res) =>{
		try {
			const allCategory = await db.Categoria.findAll()
			return res.render('productCreate',{allCategory})
		} catch (error) {
			res.send(error.message)
		}
    },
	store: async (req, res) => {
		try{
            const productToCreate = {
            name: req.body.name,
			price: req.body.price,
			categoryId: req.body.category,
			description: req.body.description,
			image: req.file.filename
            }
            await db.Productos.create(productToCreate)    
			       res.redirect('products');
           
        }catch(error){
            res.send(error.message)
        }
		
	},
	detail: async (req, res) =>{
		try {
			db.Productos.findByPk(req.params.id)
            .then(product => {
                res.render('productDetail', {product});
            });
		} catch (error) {
			res.send(error.message)
		}
    },	

	edit: async(req, res) => {
        try{
			const product = await db.Productos.findByPk(req.params.id, {
				include: ['category']
			});
			const allCategory = await db.Categoria.findAll()
            res.render('productEdit', {product, allCategory})
        }catch(error){
            res.send(error.message)
        }
	},

	update: async(req, res) => {
		try {
			await db.Productos.update({
				name: req.body.name,
				price: req.body.price,
				categoryId: req.body.category,
				description: req.body.description,
				image: req.file //no se pueden editar las imagenes
			}, {
				where: {
					id: req.params.id
				}
			});
			console.log(req.file)
			return res.redirect('/')
		} catch (error) {
			res.send(error.message)
		}
	},
	delete: async(req, res) =>{
		const idProd = req.params.id
		try {
			const prodToDelete = await db.Productos.findByPk(idProd)
			res.render('productDelete', {product: prodToDelete})
		} catch (error) {
			res.send(error.message)
		}
	},
	destroy: async(req, res) => {
		let idProd = req.params.id;
		try {
			 await db.Productos.destroy({
				where:  {id: idProd} 
			 });
			 res.redirect('/')
		} catch (error) {
			res.send(error.message)
		}
	},	
	
	productCart: (req, res) =>{
        res.render('productCart')
    }
}

module.exports = productsControllers;