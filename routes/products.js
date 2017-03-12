const express 	= require('express');
const Sequelize 	= require('sequelize');
const router 		= express.Router();
const sequelize 	= new Sequelize('nutrisys', 'root', '');
const Products 	= require("../models/Products.js")(sequelize, Sequelize);
const Users		= require("../models/Users.js")(sequelize, Sequelize);

function ProductsController(){
	// get all products
	this.index = function (req, res){

		res.status(200).json("All Products");
		
	}

	this.getById = function(req, res){

		const id = req.params.id;
		res.status(200).send("Product ID: " + id);

	}
}

const Controller = new ProductsController;

router.get('/', Controller.index);
router.get('/:id', Controller.getById);

module.exports = router;