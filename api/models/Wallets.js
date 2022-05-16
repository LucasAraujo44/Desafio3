'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wallets = sequelize.define('Wallets', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {});

  Wallets.associate = function (models) {
    Wallets.hasMany(models.transactions, {
      foreignKey: 'id_wallet'
    })
    Wallets.hasMany(models.coins, {
      foreignKey: 'wallet_id'
    })
    coins.belongsTo(models.coins)
    coins.belongsTo(models.transactions)
  };
  
  return Wallets;
};