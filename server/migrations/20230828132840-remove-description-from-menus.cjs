'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Menus', 'description');
    await queryInterface.removeColumn('Menus', 'tags');
    await queryInterface.removeColumn('Menus', 'view');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Menus', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
    await queryInterface.addColumn('Menus', 'tags', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Menus', 'view', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  }
};