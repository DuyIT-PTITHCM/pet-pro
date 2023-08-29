'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      metaTitle: {
        type: Sequelize.STRING
      },
      metaDescription: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
      },
      canonicalUrl: {
        type: Sequelize.STRING
      },
      robotMetaTags: {
        type: Sequelize.STRING
      },
      openGraphTags: {
        type: Sequelize.STRING
      },
      structuredData: {
        type: Sequelize.STRING
      },
      sitemapPriority: {
        type: Sequelize.FLOAT
      },
      sitemapFrequency: {
        type: Sequelize.STRING
      },
      sitemapLastModified: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seos');
  }
};