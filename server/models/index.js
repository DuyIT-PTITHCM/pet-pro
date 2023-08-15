import { Sequelize } from 'sequelize';
import UserModel from './user.js';
import dotenv from 'dotenv';
dotenv.config(); 

console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'mysql',
  dialect: 'mysql',
});
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "mysql",
  dialect: 'mysql',
});

const models = {
  User: UserModel(sequelize, Sequelize),
  // Thêm các mô hình khác nếu cần
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

export { sequelize, models };
