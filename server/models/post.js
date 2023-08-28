import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.Menu, {
                foreignKey: 'menuId',
                as: 'menu',
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
            content: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            published_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            tags: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            views: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Post',
        }
    );

    return Post;
};
