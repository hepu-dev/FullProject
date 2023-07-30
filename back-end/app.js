const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routers/route');

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tokoplay";

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
}

async function startServer() {
  try {
    await connectToDatabase();
    app.use(bodyParser.json());
    app.use('/api', routes);
    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();