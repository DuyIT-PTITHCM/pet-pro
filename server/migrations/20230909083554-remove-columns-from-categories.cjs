'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Categories', 'seoId');
    await queryInterface.removeColumn('Categories', 'postId');
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('Categories', 'seoId', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn('Categories', 'postId', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    // });
  },
};
