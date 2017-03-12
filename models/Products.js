module.exports = function (sequelize, Sequelize) {
	var Users 		= require("./Users.js")(sequelize, Sequelize);
	var Products 	= sequelize.define('Products', {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		ProductName: Sequelize.STRING,
		ProductDescription: Sequelize.STRING,
	    ProductType: Sequelize.INTEGER,
	    ProductQuantityAvailable: Sequelize.STRING,
	    ProductPrice: Sequelize.STRING,
	    ProductCalories: Sequelize.INTEGER,
	    ProductGI: Sequelize.INTEGER,
	    ProductAuthor: Sequelize.INTEGER,
	    ProductPicturePath: Sequelize.STRING,
	    createdAt: {
	    	type: Sequelize.STRING,
	    	field: 'created_at'
	    },
	    updatedAt: {
	    	type: Sequelize.STRING,
	    	field: 'updated_at'
	    }
	});
	Products.belongsTo(Users, {foreignKey: 'ProductAuthor'});
	return Products;
}