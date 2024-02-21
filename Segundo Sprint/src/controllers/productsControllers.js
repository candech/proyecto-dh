const fs = require('fs');
//const { Module } = require('module');
const path = require('path');

const db = require('../database/models');

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

    productCreate: async(req, res) =>{
		try {
			const allCategory = await db.Categoria.findAll()
			return res.render('productCreate',{allCategory})
		} catch (error) {
			res.send(error.message)
		}
    },
	productStore: async (req, res) => {
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
	productDetail: async (req, res) =>{
		try {
			db.Productos.findByPk(req.params.id)
            .then(productDetail => {
                res.render('productDetail', {productDetail});
            });
		} catch (error) {
			res.send(error.message)
		}
    },	

	productEdit: async(req, res) => {
		/* const idProd = req.params.id;
		const producto = products.find(producto => producto.id == idProd);
		res.render('productEdit', {producto}); */
		
	},

	productUpdate: (req, res) => {
		/* const idProd = req.params.id;
		const {name, price, discount, category, description} = req.body
		const indexProd = products.findIndex((producto) => producto.id == idProd);
		if(indexProd !== -1){
			products[indexProd].name = name;
			products[indexProd].price = price;
			products[indexProd].discount = discount;
			products[indexProd].category = category;
			products[indexProd].description = description;
			fs.writeFileSync(productsFilePath, JSON.stringify(products));
			console.log("producto actualizado correctamente")
			res.redirect('/')
		} else {
			
			res.send('no se encontro el producto')
		} */
		
	},

	productDestroy: (req, res) => {
		/* let idProd = req.params.id;
		products = products.filter((producto) => producto.id != idProd)
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		//res.send("Producto eliminado");
		res.redirect('/')
		console.log('producto eliminado') */
	},	
	
	productCart: (req, res) =>{
        res.render('productCart')
    }
}

module.exports = productsControllers;