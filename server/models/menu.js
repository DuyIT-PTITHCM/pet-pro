import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Menu extends Model {
        static associate(models) {
            Menu.hasMany(models.Menu, {
                foreignKey: 'parent_id',
                as: 'subMenus',
            });
            Menu.hasMany(models.Storage, {
                foreignKey: 'menu_id',
                as: 'fileAttach',
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
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            view: {
                type: DataTypes.INTEGER,
                allowNull: true,
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
            tags: {
                type: DataTypes.STRING,
                allowNull: true,
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
