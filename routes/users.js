const express 	= require('express');
const Sequelize 	= require('sequelize');
const router 		= express.Router();
const sequelize 	= new Sequelize('nutrisys', 'root', '');
const Users 		= require("../models/Users.js")(sequelize, Sequelize);

// define the home page route
router.get('/', function (req, res) {

	sequelize.sync().then(function() { 
	  return Users.findAll().then(function (users) {
		    return users;
		});
	}).then(function(users) {
	 	res.status(200).json(users);
	});

})
router.get('/:id', function (req, res) {
	const id = req.params.id;
	sequelize.sync().then(function() {
	  return Users.findById(id).then(function (user) {
		    return user; 
		});
	}).then(function(user) {
		if(!user) res.status(200).json({error: true, message: "User not found"});
	 	res.status(404).json(user);
	});

})

module.exports = router;