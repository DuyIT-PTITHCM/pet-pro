import { Sequelize } from 'sequelize';
import UserModel from './user.js';
import MenuModel from './menu.js';
import PostModel from './post.js';
import CategoriesModel from './categories.js';
import ProductModel from './product.js';
import StorageModel from './storage.js';
import SeoModel from './seo.js';
import OrderModel from './order.js';
import OrderItemModel from './orderItem.js';
import dotenv from 'dotenv';
dotenv.config(); 


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "mysql",
  dialect: 'mysql',
});
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.' + process.env.DB_NAME + ' ' + process.env.DB_USERNAME + ' ' + process.env.DB_PASSWORD);
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
const models = {
  User: UserModel(sequelize, Sequelize),
  Menu: MenuModel(sequelize, Sequelize),
  Storage: StorageModel(sequelize, Sequelize),
  Post: PostModel(sequelize, Sequelize),
  Categories: CategoriesModel(sequelize, Sequelize),
  Product: ProductModel(sequelize, Sequelize),
  Seo: SeoModel(sequelize, Sequelize),
  Order: OrderModel(sequelize, Sequelize),
  OrderItem: OrderItemModel(sequelize, Sequelize),
  sequelize
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

export { sequelize, models };
