'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CurrencyInfo', {
      id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        comment: 'The db primary key from server'
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        comment: 'The display name of the currency'
      },
      symbol: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        comment: 'The display symbol',
      }, 
      code: {
        type:  Sequelize.DataTypes.STRING,
        allowNull: true,
        comment: 'Fiat currenct code, ISO 4217'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    //undo created tables
    await queryInterface.dropTable('CurrencyInfo');
  }
};
