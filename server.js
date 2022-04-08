import express from 'express';
import data from './data.js';
import cors from 'cors';
//,,now create express app//
const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

// in app listen the server stops and starts sending the information to the front end
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

//.. after this install nodemon//
