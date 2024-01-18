import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class CheckinCheckout extends Model {
    static associate(models) {
    }
  }

  CheckinCheckout.init(
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
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
      modelName: 'CheckinCheckout',
    }
  );

  return CheckinCheckout;
};
