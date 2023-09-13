'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Menus', 'seoId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      after: 'parent_id',
      references: {
        model: 'Seos',
        key: 'id',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
  },
};
