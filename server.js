import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import { handler } from './build/handler.js';
import dotenv from 'dotenv';

// Load biến môi trường từ tệp .env vào process.env
dotenv.config();

import usersRouter from './server/routes/api/v1.0/userRoute.js';

// router ViewMode_1.0 
app.use('/api/v1.0/users', usersRouter);
app.use('/', (req, res) => {
  res.json({ message: "say hello" });
});


app.use(handler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
