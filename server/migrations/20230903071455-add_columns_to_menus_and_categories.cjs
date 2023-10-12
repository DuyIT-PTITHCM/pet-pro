'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'menuId');
    await queryInterface.addColumn('Menus', 'type', {
      type: Sequelize.ENUM('product', 'service', 'blog'),
      defaultValue: 'product',
      allowNull: false,
    });
    await queryInterface.addColumn('Menus', 'isShowDescription', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
    await queryInterface.addColumn('Menus', 'description', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Menus', 'active', {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    });
    await queryInterface.addColumn('Categories', 'menuId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Menus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.changeColumn('Categories', 'type', {
      type: Sequelize.ENUM('product', 'service', 'blog'),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Menus', 'type');
    await queryInterface.removeColumn('Menus', 'isShowDescription');
    await queryInterface.removeColumn('Menus', 'description');
    await queryInterface.removeColumn('Menus', 'active');
    await queryInterface.removeColumn('Categories', 'menuId');
  },
};
