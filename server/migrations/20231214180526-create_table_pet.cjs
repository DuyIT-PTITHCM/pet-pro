'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      breed: {
        type: Sequelize.STRING,
      },
      furColor: {
        type: Sequelize.STRING,
      },
      height: {
        type: Sequelize.FLOAT,
      },
      length: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      healthStatus: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pets');
  },
};
