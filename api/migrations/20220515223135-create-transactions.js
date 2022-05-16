
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_wallet: {
        allowNull: false,
        type: Sequelize.INTEGER,
       // references: { model: 'Wallets', key:'wallet_id'}// teste
      },
      id_coin: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'coins', key:'id'}
      },
      value: {
        type: Sequelize.DOUBLE
      },
      dateTime: {
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.INTEGER
      },
      receiveFrom: {
        type: Sequelize.INTEGER
      },
      currentCotation: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};