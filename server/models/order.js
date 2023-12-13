import { Model } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';

export default (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId',
        as: 'orderItems',
      });
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      reciverName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reciverEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reciverPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reciverAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Confirm', 'Processing', 'Shipping', 'Completed', 'Returned', 'Canceled'),
        defaultValue: 'Pending',
        allowNull: false,
      },
      payment: {
        type: DataTypes.ENUM('Ship_COD', 'Paypal'),
        defaultValue: 'Ship_COD',
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        defaultValue: 'unpaid',
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  sequelizePaginate.paginate(Order);
  return Order;
};
