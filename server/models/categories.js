import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products',
      });
      Categories.hasMany(models.Post, {
        foreignKey: 'categoryId',
        as: 'posts',
      });
      Categories.belongsTo(models.Menu, {
        foreignKey: 'id',
        primaryKey: 'menuId',
        as: 'menu',
      });
    }
  }

  Categories.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryName: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('product', 'service','article'),
        allowNull: false,
      },
      menuId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Menus',
          key: 'id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Categories'
    }
  );

  return Categories;
};
