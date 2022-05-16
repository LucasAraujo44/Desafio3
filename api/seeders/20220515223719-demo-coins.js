'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('coins', [
      {
        wallet_id: '1',
        coin: 'BTC',
        fullname: 'Bitcoin',
        amount: '0.10003'
        
      }
      
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('coins', null, {})
  }
}
