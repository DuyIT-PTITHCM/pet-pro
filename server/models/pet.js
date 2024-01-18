import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
        Pet.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Pet.hasMany(models.UseService, {
        foreignKey: 'petId',
        as: 'useServices',
      });
    }
  }

  Pet.init(
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
      breed: {
        type: DataTypes.STRING,
      },
      furColor: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.FLOAT,
      },
      length: {
        type: DataTypes.FLOAT,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      healthStatus: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Pet',
    }
  );
  return Pet;
};
