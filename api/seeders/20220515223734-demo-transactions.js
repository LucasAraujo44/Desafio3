'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('transactions', [
      {
        id_wallet: '1',
        id_coin: '1',
        value: '0.0123110',
        datetime: new Date(),
        sendTo: '123456',
        receiveFrom: '654321',
        currentCotation:'0.0123',
        createdAt: new Date(),
        updatedAt: new Date() 
       
        
      }
      
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('transactions', null, {})
  }
}
