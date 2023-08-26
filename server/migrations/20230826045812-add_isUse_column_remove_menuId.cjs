'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Storages', 'menu_id');
    await queryInterface.addColumn('Storages', 'isUse', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      after: 'size',
    });
    await queryInterface.addColumn('users', 'avatar', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      after: 'email',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Storages', 'menu_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.removeColumn('Storages', 'isUse');
    await queryInterface.removeColumn('users', 'avatar');
  }
};
