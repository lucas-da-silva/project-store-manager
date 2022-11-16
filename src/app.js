const express = require('express');
const productsRoutes = require('./routers/productsRoutes');
const salesRoutes = require('./routers/salesRoutes');

const app = express();
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

module.exports = app;