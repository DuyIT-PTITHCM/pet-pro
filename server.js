// server.js
import express from 'express';

const app = express();
const port = process.env.PORT || 5100;
// Your Express routes go here
app.get('/api/data', (req, res) => {
  // Handle your API logic here
  res.json({ message: 'Hello from Express API!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
