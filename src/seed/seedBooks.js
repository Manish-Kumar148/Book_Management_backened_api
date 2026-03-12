const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');

const connectDB = require('../config/db');
const Book = require('../models/Book');

const sampleBooks = [
  {
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell',
    isbn: '9780134610993',
    genre: 'Artificial Intelligence',
    publisher: 'Pearson',
    publicationYear: 2021,
    totalCopies: 10,
    availableCopies: 7,
    shelfLocation: 'A1-R3',
    bookType: 'Circulating',
    status: 'Available'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '9780132350884',
    genre: 'Software Engineering',
    publisher: 'Prentice Hall',
    publicationYear: 2008,
    totalCopies: 6,
    availableCopies: 4,
    shelfLocation: 'B2-R1',
    bookType: 'Reference',
    status: 'Available'
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    isbn: '9781449373320',
    genre: 'Distributed Systems',
    publisher: "O'Reilly Media",
    publicationYear: 2017,
    totalCopies: 5,
    availableCopies: 2,
    shelfLocation: 'C4-R2',
    bookType: 'Circulating',
    status: 'Checked Out'
  }
];

const seedBooks = async () => {
  try {
    await connectDB();
    await Book.deleteMany();
    await Book.insertMany(sampleBooks);
    console.log('Sample books inserted successfully');
  } catch (error) {
    console.error('Failed to seed books:', error.message);
  } finally {
    await mongoose.connection.close();
  }
};

seedBooks();
