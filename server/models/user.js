import { Model } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders',
      });
      User.hasMany(models.Pet, {
        foreignKey: 'userId',
        as: 'pets',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    information: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.ENUM('male', 'female', 'other'),
    emailConfirm: DataTypes.BOOLEAN,
    phoneConfirm: DataTypes.BOOLEAN,
    role: DataTypes.ENUM('admin', 'employer', 'customer'),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users'
  });
  sequelizePaginate.paginate(User);
  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return User;
};
