module.exports = function (sequelize, Sequelize) {

	var Users = sequelize.define('Users', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: Sequelize.STRING,
		email: Sequelize.STRING,
	    password: Sequelize.STRING,
	    createdAt: {
	    	type: Sequelize.STRING,
	    	field: 'created_at'
	    },
	    updatedAt: {
	    	type: Sequelize.STRING,
	    	field: 'updated_at'
	    }
	});
	
	return Users;
}