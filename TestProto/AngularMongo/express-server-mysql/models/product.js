'use strict';
module.exports = (sequelize , DataTypes) => {
  var Product = sequelize.define('Product', {
    ProductName: {
      type: DataTypes.STRING
    },
    ProductDescription: {
      type: DataTypes.STRING
    },
    ProductPrice: {
      type: DataTypes.FLOAT
    }
  }, {freezeTableName: true});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};