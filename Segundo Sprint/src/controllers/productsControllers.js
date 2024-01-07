const fs = require('fs');
//const { Module } = require('module');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  //toma un número como entrada y devuelve una cadena con el número formateado con comas como separadores de miles

const productsControllers ={
	productIndex: (req, res) =>{
        res.render('productIndex',{products, toThousand})
    },	

    productCreate: (req, res) =>{
        res.render('productCreate')
    },

	productDetail: (req, res) =>{
		const idProd = req.params.id;
		const productDetail = products.find(producto => producto.id == idProd);
		res.render('productDetail', {productDetail}); 
    },	

	productStore: (req, res) => {
		try{
			const newProduct = {id: products.length + 1, ...req.body, image: req.file.filename};
			products.push(newProduct);
			fs.writeFileSync(productsFilePath, JSON.stringify(products));
			res.redirect('/products');
		}catch(error){
			console.log('error: ', error);
		}
	},

	productEdit: (req, res) => {
		const idProd = req.params.id;
		const producto = products.find(producto => producto.id == idProd);
		res.render('productEdit', {producto});
	},

	productUpdate: (req, res) => {
		const idProd = req.params.id;
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
		}
		
	},

	productDestroy: (req, res) => {
		let idProd = req.params.id;
		products = products.filter((producto) => producto.id != idProd)
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		//res.send("Producto eliminado");
		res.redirect('/')
		console.log('producto eliminado')
	},	
	
	productCart: (req, res) =>{
        res.render('productCart')
    }
}

module.exports = productsControllers;