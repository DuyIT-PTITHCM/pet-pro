import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
    class Storages extends Model {
    }

    Storages.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isUse: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        type: {
            type: DataTypes.ENUM('file', 'image'),
            allowNull: false,
            defaultValue: 'file'
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Storages',
        timestamps: true
    });

    return Storages;
};
