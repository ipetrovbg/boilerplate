const express 	= require('express');
const router 		= express.Router();

function UsersController(){
	// all users
	this.index = function(req, res){
		res.status(200).send("All Users");
	}

	// get user by id
	this.getById = function (req, res) {
		const id = req.params.id;
		res.status(200).send("User ID: " + id);
	}
}

const Controller = new UsersController;

// define the users api routes
router.get('/', Controller.index);
router.get('/:id', Controller.getById);

module.exports = router;