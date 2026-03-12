const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`
  });
};

const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  let message = error.message || 'Internal Server Error';

  if (error.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(error.errors)
      .map((item) => item.message)
      .join(', ');
  }

  if (error.code === 11000) {
    statusCode = 400;
    message = 'ISBN must be unique';
  }

  if (error.name === 'CastError') {
    statusCode = 404;
    message = 'Book not found';
  }

  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};
