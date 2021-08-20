import express from 'express';
import dotenv from 'dotenv';
<<<<<<< HEAD
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

=======
import products from './data/products.js';

dotenv.config();

>>>>>>> ec1640ed18a1fb294e1f317e3349f3adfee216ee
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

<<<<<<< HEAD
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);
=======
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
>>>>>>> ec1640ed18a1fb294e1f317e3349f3adfee216ee

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
<<<<<<< HEAD
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
=======
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
>>>>>>> ec1640ed18a1fb294e1f317e3349f3adfee216ee
);
