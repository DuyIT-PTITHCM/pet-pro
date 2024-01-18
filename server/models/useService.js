import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class UseService extends Model {
    static associate(models) {
      UseService.belongsTo(models.Pet, {
        foreignKey: 'petId',
        as: 'pet',
      });
    }
  }

  UseService.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      petId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Pet',
          key: 'id',
        },
      },
      code: {
        type: DataTypes.STRING,
      },
      isCheckout: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      checkinImage: {
        type: DataTypes.STRING,
      },
      checkoutImage: {
        type: DataTypes.STRING,
      },
      checkinTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      checkoutTime: {
        type: DataTypes.DATE,
      },
      checkinStatus: {
        type: DataTypes.STRING,
      },
      checkoutStatus: {
        type: DataTypes.STRING,
      },
      checkoutReceiver: {
        type: DataTypes.STRING,
      },
      checkoutPhone: {
        type: DataTypes.STRING,
      },
      serviceId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'UseService',
    }
  );

  return UseService;
};