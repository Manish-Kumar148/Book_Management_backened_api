const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
      trim: true
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      trim: true
    },
    publisher: {
      type: String,
      required: [true, 'Publisher is required'],
      trim: true
    },
    publicationYear: {
      type: Number,
      min: [0, 'Publication year cannot be negative']
    },
    totalCopies: {
      type: Number,
      required: [true, 'Total copies is required'],
      min: [1, 'Total copies must be a positive number']
    },
    availableCopies: {
      type: Number,
      required: [true, 'Available copies is required'],
      min: [0, 'Available copies cannot be negative'],
      validate: {
        validator(value) {
          return value <= this.totalCopies;
        },
        message: 'Available copies cannot exceed total copies'
      }
    },
    shelfLocation: {
      type: String,
      trim: true
    },
    bookType: {
      type: String,
      enum: ['Reference', 'Circulating'],
      default: 'Circulating'
    },
    status: {
      type: String,
      enum: ['Available', 'Checked Out'],
      default: 'Available'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);
