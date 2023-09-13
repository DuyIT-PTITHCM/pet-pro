import { Model } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';

export default (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.Categories, {
                foreignKey: 'categoryId',
                as: 'category',
            });
            Post.belongsTo(models.Seo, {
                foreignKey: 'seoId',
                as: 'seo',
            });
        }
    }

    Post.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            slug: DataTypes.STRING,
            published_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            views: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            imageUrl: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            seoId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Seo',
                    key: 'id',
                },
            },
            categoryId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Categories',
                    key: 'id',
                },
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Post',
        }
    );
    sequelizePaginate.paginate(Post);

    return Post;
};
