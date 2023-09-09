import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Seo extends Model {
    static associate(models) {}
  }

  Seo.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      metaTitle: {
        type: DataTypes.STRING,
      },
      metaDescription: {
        type: DataTypes.STRING,
      },
      keywords: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      canonicalUrl: {
        type: DataTypes.STRING,
      },
      robotMetaTags: {
        type: DataTypes.STRING,
      },
      openGraphTags: {
        type: DataTypes.STRING,
      },
      structuredData: {
        type: DataTypes.STRING,
      },
      sitemapPriority: {
        type: DataTypes.FLOAT,
      },
      sitemapFrequency: {
        type: DataTypes.STRING,
      },
      sitemapLastModified: {
        type: DataTypes.DATE,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Seo'
    }
  );

  return Seo;
};
