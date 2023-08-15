import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    information: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
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
    createdAt: DataTypes.DATE,    // Change 'created_at' to 'createdAt'
    updatedAt: DataTypes.DATE,   // Change 'updated_at' to 'updatedAt'
    deletedAt: DataTypes.DATE     // Change 'updated_at' to 'updatedAt'
  }, {
    sequelize,
    modelName: 'users',
  });
  return User;
};
