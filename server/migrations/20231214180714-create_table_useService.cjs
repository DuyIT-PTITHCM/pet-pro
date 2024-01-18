'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UseServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      petId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Pets',
          key: 'id',
        },
      },
      code: {
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
        defaultValue: Sequelize.NOW,
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
      checkoutReceiver: {
        type: Sequelize.STRING,
      },
      checkoutPhone: {
        type: Sequelize.STRING,
      },
      serviceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UseServices');
  },
};
