'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL
      },
      originalPrice: {
        type: Sequelize.DECIMAL
      },
      stockQuantity: {
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      images: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.ENUM('pet', 'accessory', 'medical_equipment'),
        allowNull: true, 
      },
      discount: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('featured', 'best_selling', 'normal'),
        allowNull: true, 
      },
      expirationDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      editedBy: {
        type: Sequelize.INTEGER
      },
      seoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Seos',
          key: 'id',
        },
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Posts',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
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
    await queryInterface.dropTable('Products');
  }
};