const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const dbConnection = require('./utils/db');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Routes import
const homeRoute = require('./routes/home');
const blogRoute = require('./routes/blog');

app.use(homeRoute);
app.use(blogRoute);

dbConnection().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log('Server Started');
  });
});
