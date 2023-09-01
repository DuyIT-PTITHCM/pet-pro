import { Model } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';

export default (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Seo, {
        foreignKey: 'seoId',
        as: 'seo',
      });
      Product.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
      });
      Product.belongsTo(models.Categories, {
        foreignKey: 'categoryId',
        as: 'category',
      });
    }
  }

  Product.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      originalPrice: DataTypes.DECIMAL,
      stockQuantity: DataTypes.INTEGER,
      origin: DataTypes.STRING,
      notes: DataTypes.STRING,
      images: DataTypes.TEXT,
      type: DataTypes.ENUM('pet', 'accessory', 'medical_equipment'),
      discount: DataTypes.DECIMAL,
      status: DataTypes.ENUM('featured', 'best_selling', 'normal'),
      expirationDate: DataTypes.DATE,
      slug: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      editedBy: DataTypes.INTEGER,
      seoId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Seo',
          key: 'id',
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Post',
          key: 'id',
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
      }
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  sequelizePaginate.paginate(Product);

  return Product;
};
