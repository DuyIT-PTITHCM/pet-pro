import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import { handler } from './build/handler.js'; 

// Định nghĩa các API endpoints hoặc các route khác tại đây
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.use(handler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
