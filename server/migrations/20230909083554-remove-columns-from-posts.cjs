'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'category');
    await queryInterface.removeColumn('Posts', 'tags');

    await queryInterface.addColumn('Posts', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Categories',
        key: 'id',
      }
    });
    await queryInterface.addColumn('Posts', 'description', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
  },
};
