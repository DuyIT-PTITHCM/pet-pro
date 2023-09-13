'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Posts', 'seoId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Seos',
        key: 'id',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
  },
};
