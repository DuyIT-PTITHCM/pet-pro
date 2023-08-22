import express from 'express';
import bodyParser from 'body-parser';
import { handler } from './build/handler.js';
import usersRouter from './server/routes/api/v1.0/userManagementRoute.js';
import authRoute from './server/routes/api/v1.0/authRoute.js';
import verifyToken from './server/middleware/authMiddleware.js'
import cors from 'cors';
const V_1_0 = "/api/v1.0";


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// auth ennpoint 
app.use(V_1_0 + '/auth', authRoute);
// user management
app.use(V_1_0 + '/user-management', verifyToken, usersRouter);


app.use(handler);
app.listen(PORT, () => {
  console.log(`Server is running`);
});
