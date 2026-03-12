const express = require('express');

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks
} = require('../controllers/bookController');

const router = express.Router();

router.get('/search', searchBooks);
router.route('/').post(createBook).get(getBooks);
router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
