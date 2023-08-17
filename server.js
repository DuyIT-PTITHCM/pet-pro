import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;
import { handler } from './build/handler.js';
import dotenv from 'dotenv';
import usersRouter from './server/routes/api/v1.0/userManagementRoute.js';
import authRoute from './server/routes/api/v1.0/authRoute.js';


const VERSION_1 = "/api/v1.0";
// Load biến môi trường từ tệp .env vào process.env
dotenv.config();


// Sử dụng body-parser để xử lý dữ liệu trong request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// auth ennpoint 
app.use(VERSION_1 + '/auth', authRoute);
// user management
app.use(VERSION_1 + '/user-management', usersRouter);


app.use(handler);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
