import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.belongsTo(models.Seo, {
        foreignKey: 'seoId',
        as: 'seo',
      });
      Categories.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
      });
      Categories.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products',
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
        type: DataTypes.ENUM('product', 'article'),
        allowNull: false,
      },
      seoId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Seos',
          key: 'id',
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Posts',
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
