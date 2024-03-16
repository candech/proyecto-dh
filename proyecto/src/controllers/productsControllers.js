
//const { Module } = require('module');
const path = require("path");
const db = require('../database/models');
const { validationResult } = require('express-validator');
const fs = require("fs");

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
			const allCategory = await db.Categoria.findAll()
			const resultValidation = validationResult(req);
			if (resultValidation.errors.length > 0) {
				const deletedFile = path.resolve(__dirname, "../public/img/products", req.file.filename)
				fs.unlinkSync(deletedFile)
				return res.render('productCreate', {
					errors: resultValidation.mapped(),
					old: req.body,
					allCategory
				})
			}
            const productToCreate = {
            name: req.body.name,
			price: req.body.price,
			categoryId: req.body.category,
			description: req.body.description,
			image: req.file.filename
            }
            db.Productos.create(productToCreate)    
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
			}, {
				where: {
					id: req.params.id
				}
			});
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
    },
	
}

module.exports = productsControllers;