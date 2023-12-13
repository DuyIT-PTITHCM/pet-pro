// migrations/20230101000002-create-order.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      reciverName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reciverEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reciverPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reciverAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(
          'Pending',
          'Confirm',
          'Processing',
          'Shipping',
          'Completed',
          'Returned',
          'Canceled'
        ),
        defaultValue: 'Pending',
        allowNull: false,
      },
      payment: {
        type: Sequelize.ENUM('Ship_COD', 'Paypal'),
        defaultValue: 'Ship_COD',
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.STRING,
        defaultValue: 'unpaid',
        allowNull: false,
      },
      total: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  },
};
