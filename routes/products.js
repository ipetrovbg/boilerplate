const express 	= require('express');
const Sequelize 	= require('sequelize');
const router 		= express.Router();
const sequelize 	= new Sequelize('nutrisys', 'root', '');
const Products 	= require("../models/Products.js")(sequelize, Sequelize);
const Users		= require("../models/Users.js")(sequelize, Sequelize);

function ProductsController(){
	// get all products
	this.index = function (req, res){
		sequelize.sync().then(function() { 
		  return Products.findAll({ include: Users }).then(function (products) {
			    return products;
			});
		}).then(function(products) {
		 	res.status(200).json(products);
		});
	}

	this.getById = function(req, res){

		const id = req.params.id;
		sequelize.sync().then(function() {
		  return Products.findById(id,{ include: Users }).then(function (product) {
			    return product; 
			});
		}).then(function(product) {
			if(!product) res.status(200).json({error: true, message: "Product not found"});
		 	res.status(404).json(product);
		});
	}
}

const Controller = new ProductsController;

router.get('/', Controller.index);
router.get('/:id', Controller.getById);

module.exports = router;