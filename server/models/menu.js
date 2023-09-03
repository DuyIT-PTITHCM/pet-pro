import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Menu extends Model {
        static associate(models) {
            Menu.hasMany(models.Menu, {
                foreignKey: 'parent_id',
                as: 'subMenus',
            });
            Menu.hasMany(models.Categories, {
                foreignKey: 'menuId',
                as: 'categories',
            });
        }
    }

    Menu.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            isShowDescription: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM('product', 'service', 'article'),
                defaultValue: 'product',
                allowNull: false,
            },
            parent_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Menu',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Menu'
        }
    );

    return Menu;
};
