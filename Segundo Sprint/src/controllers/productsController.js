const products ={
    productCreate: (req, res) =>{
        res.render('productCreate')
    },
    // Update - Form to edit
	edit: (req, res) => {
		const idProd = req.params.id;
		const producto = products.find(producto => producto.id == idProd);
		res.render('productEdit', {producto});
	},
	// Update - Method to update
	update: (req, res) => {
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
}