'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Wallets', [
      {
        name: 'Ana Souza',
        cpf: "987.654.321-00",
        birthdate: '2000-05-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marcos Cintra',
        cpf: "222.333.777-00",
        birthdate: '2000-04-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Felipe Cardoso',
        cpf: "555.777.999-00",
        birthdate: '2000-06-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sandra Gomes',
        cpf: "777.888.999-00",
        birthdate: '2000-07-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paula Morais',
        cpf: "444.555.666-00",
        birthdate: '2000-08-05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rafael Souza',
        cpf: "111.222.333-00",
        birthdate: '2000-09-05',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Wallets', null, {})
  }
}
