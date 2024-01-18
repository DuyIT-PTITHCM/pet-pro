'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CheckinCheckouts', {
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
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
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
      isCheckout: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      checkinImage: {
        type: Sequelize.STRING,
      },
      checkoutImage: {
        type: Sequelize.STRING,
      },
      checkinTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      checkoutTime: {
        type: Sequelize.DATE,
      },
      checkinStatus: {
        type: Sequelize.STRING,
      },
      checkoutStatus: {
        type: Sequelize.STRING,
      },
      serviceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('CheckinCheckouts');
  },
};
