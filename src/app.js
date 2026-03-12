const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const bookRoutes = require('./routes/bookRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Library Management Backend API is running.'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'UP'
  });
});

app.use('/books', bookRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
