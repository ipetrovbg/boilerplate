const express 	= require('express');
const Sequelize 	= require('sequelize');
const router 		= express.Router();
const sequelize 	= new Sequelize('nutrisys', 'root', '');
const Users 		= require("../models/Users.js")(sequelize, Sequelize);

function UsersController(){
	// all users
	this.index = function(req, res){
		sequelize.sync().then(function() {
		  return Users.findAll().then(function (users) {
			    return users; 
			});
		}).then(function(users) {
		 	res.status(200).json(users);
		});
	}

	// get user by id
	this.getById = function (req, res) {
		const id = req.params.id;
		sequelize.sync().then(function() {
		  return Users.findById(id).then(function (user) {
			    return user; 
			});
		}).then(function(user) {
			if(!user) res.status(200).json({error: true, message: "User not found"});
		 	res.status(404).json(user);
		});

	}
}

const Controller = new UsersController;

// define the users api routes
router.get('/', Controller.index);
router.get('/:id', Controller.getById);

module.exports = router;