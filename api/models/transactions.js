'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
  //  id_wallet: DataTypes.INTEGER,
    //id_coin: DataTypes.INTEGER,
    value: DataTypes.DOUBLE,
    dateTime: DataTypes.DATE,
    sendTo: DataTypes.INTEGER,
    receiveFrom: DataTypes.INTEGER,
    currentCotation: DataTypes.DOUBLE
  }, {});

  /* transactions.associate = function (models) {
       transactions.hasMany(models.wallet),{
      foreignKey: 'id_wallet'
    }

  }; */
  return transactions;
};