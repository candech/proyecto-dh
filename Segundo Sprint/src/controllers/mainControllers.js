const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainControllers = {

    index: (req, res) =>{
        res.render ('index')
    },

    login: (req, res) =>{
        res.render ('login')
    },

    register: (req, res) =>{
        res.render ('register')
    },

    /*productCart: (req, res) =>{
        res.render('productCart')
    },

    productDetail: (req, res) =>{
		const idProd = req.params.id;
		const producto = products.find(producto => producto.id == idProd);
		res.render('productDetail', {producto, toThousand});        
    },
    productCreate: (req, res) =>{
        res.render('productCreate')
    },
    // Update - Form to edit
	edit: (req, res) => {
		const idProd = req.params.id;
		const producto = products.find(producto => producto.id == idProd);
		res.render('product-edit-form', {producto});
	},
	// Update - Method to update
	update: (req, res) => {
		const idProd = req.params.id;
		const {name,price, discount,category, description} = req.body
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
			console.log('no se encontro el producto')
			res.send('no se encontro el producto')
		}
		console.log()
		//res.send("Producto editado");
	},*/
};

module.exports = mainControllers;