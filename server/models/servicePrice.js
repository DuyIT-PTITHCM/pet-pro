import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class ServicePrice extends Model {
    static associate(models) {}
  }

  ServicePrice.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      petWeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'ServicePrice'
    }
  );

  return ServicePrice;
};
