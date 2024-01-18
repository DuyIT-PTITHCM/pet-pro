import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { handler } from './build/handler.js';
import usersRouter from './server/routes/api/v1.0/userManagementRoute.js';
import authRoute from './server/routes/api/v1.0/authRoute.js';
import menusRouter from './server/routes/api/v1.0/menuRoute.js';
import postRouter from './server/routes/api/v1.0/postRoute.js';
import categoriesRoute from './server/routes/api/v1.0/categoriesRoute.js';
import productsRoute from './server/routes/api/v1.0/productsRoute.js';
import uploadFileRoute from './server/routes/api/v1.0/uploadFileRoute.js';
import seoRoute from './server/routes/api/v1.0/seoRoute.js';
import frontRoute from './server/routes/api/v1.0/frontRoute.js';
import orderRoute from './server/routes/api/v1.0/orderRoute.js';
import dashboardRoute from './server/routes/api/v1.0/dashboardRoute.js';
import checkRoute from './server/routes/api/v1.0/checkRoute.js';
import petsRoute from './server/routes/api/v1.0/petsRoute.js';
import useServiceRoute from './server/routes/api/v1.0/useServiceRoute.js';
import customerRoute from './server/routes/api/v1.0/customerRoute.js';
import verifyToken from './server/middleware/authMiddleware.js';
import cors from 'cors';
import cron from 'node-cron';
import dailyJobDeleteImage from './server/cron/dailyJobDeleteImage.js';
import verifyAdmin from './server/middleware/verifyAdmin.js';
import verifyEmployer from './server/middleware/verifyEmployer.js';
import paypal from 'paypal-rest-sdk';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const V_1_0 = "/api/v1.0";

const app = express();
const PORT = process.env.PORT || 3000;

// cros server 
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'Ad1N5ku2mebVOBTxabynj8XJP2G5BtKR56M6j3aHC8YEMV7moQw07WtLswLwJscupjFlWHXy5V9dDriP',
  'client_secret': 'EH7pDeaDaSimqoHLGlJxK8gZ70a4TJoOVfhNZLXp84oB0eYTHuD_t19igqesXJfcMkAW7fUtZMv9rWbp'
});

// router 
app.use(V_1_0 + '/auth', authRoute);
app.use(V_1_0 + '/user-management', verifyToken, verifyAdmin, usersRouter);
app.use(V_1_0 + '/menu', verifyToken, verifyAdmin, menusRouter);
app.use(V_1_0 + '/upload', verifyToken, verifyAdmin, uploadFileRoute);
app.use(V_1_0 + '/posts', verifyToken, verifyAdmin, postRouter);
app.use(V_1_0 + '/categories', verifyToken, verifyAdmin, categoriesRoute);
app.use(V_1_0 + '/products', verifyToken, verifyAdmin, productsRoute);
app.use(V_1_0 + '/seo', verifyToken, verifyAdmin, seoRoute);
app.use(V_1_0 + '/front', frontRoute);
app.use(V_1_0 + '/orders', orderRoute);
app.use(V_1_0 + '/dashboard', dashboardRoute);
app.use(V_1_0 + '/checkInOut', checkRoute);
app.use(V_1_0 + '/uploadnoauth', uploadFileRoute);
app.use(V_1_0 + '/pets', petsRoute);
app.use(V_1_0 + '/use-services', useServiceRoute);
app.use(V_1_0 + '/customer', verifyToken, customerRoute)

// cron job 
// cron.schedule('0 0 * * *', dailyJobDeleteImage);
cron.schedule('*/10 * * * *', dailyJobDeleteImage);

//adapter front-end sveltekit
app.use(handler);

//runing server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
