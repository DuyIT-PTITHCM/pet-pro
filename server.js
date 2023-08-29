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
import verifyToken from './server/middleware/authMiddleware.js'
import cors from 'cors';


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

// router 
app.use(V_1_0 + '/auth', authRoute);
app.use(V_1_0 + '/user-management', verifyToken, usersRouter);
app.use(V_1_0 + '/menu', verifyToken, menusRouter);
app.use(V_1_0 + '/upload', uploadFileRoute);
app.use(V_1_0 + '/posts', verifyToken, postRouter);
app.use(V_1_0 + '/categories', verifyToken, categoriesRoute);
app.use(V_1_0 + '/products', verifyToken, productsRoute);

//adapter front-end sveltekit
app.use(handler);

//runing server
app.listen(PORT, () => {
  console.log(`Server is running`);
});
