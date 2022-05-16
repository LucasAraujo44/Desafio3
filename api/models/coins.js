'use strict';
module.exports = (sequelize, DataTypes) => {
  const coins = sequelize.define('coins', {
    
    coin: DataTypes.STRING,
   fullname: DataTypes.STRING,
    amount: DataTypes.STRING
  
  }, {});

  coins.associate = function (models) {
    coins.hasMany(models.transactions,{
      foreignKey: 'id_coin'
    })
  }
  coins.belongsTo(models.transactions)

  return coins;
};
