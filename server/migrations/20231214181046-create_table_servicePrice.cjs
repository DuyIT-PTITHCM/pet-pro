'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ServicePrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      serviceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      petWeight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ServicePrices');
  },
};
