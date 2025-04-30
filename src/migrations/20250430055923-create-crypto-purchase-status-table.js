'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('CoinPurchaseStatus', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: 'The db primary key from CoinPurchaseStatus table'
      },
      coinId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'CurrencyInfo',    // name of the target table
          key: 'id',         // column in the target table that this column references
        },
        comment: 'Foreign key from CoinInfo table'
      },
      availability: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'Status of coin for purchase'
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        comment: 'Date record is created'
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        comment: 'Date record is created'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('CoinPurchaseStatus')
  }
};
