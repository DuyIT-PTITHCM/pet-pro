'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Seos', 'metaTitle', {
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn('Seos', 'metaDescription', {
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn('Seos', 'keywords', {
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn('Seos', 'canonicalUrl', {
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn('Seos', 'robotMetaTags', {
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn('Seos', 'openGraphTags', {
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn('Seos', 'structuredData', {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
  },
};
