# Library Management Backend

Backend API for a university Library Management System built with Node.js, Express, and MongoDB.

## Features

- Add, view, update, delete, and search book records
- Mongoose schema validations for required fields and unique ISBN
- Error handling middleware with proper HTTP status codes
- Render deployment configuration
- Postman collection and report generation assets

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv

## Project Structure

```text
src/
  app.js
  server.js
  config/db.js
  controllers/bookController.js
  middleware/errorMiddleware.js
  models/Book.js
  routes/bookRoutes.js
  seed/seedBooks.js
scripts/
  generate_report.py
output/
  doc/
  pdf/
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and update `MONGODB_URI`.
3. Start MongoDB locally or use MongoDB Atlas.
4. Run the server:
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/books` | Add a new book |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a book by ID |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |
| GET | `/books/search?title=xyz` | Search books by title |
| GET | `/books/search?author=abc` | Search books by author |

## Render Deployment

1. Push the repository to GitHub.
2. Create a MongoDB database URI for production.
3. On Render, create a new Blueprint deployment using `render.yaml`.
4. Add `MONGODB_URI` as an environment variable.

## Submission Assets

- [Report source](./scripts/generate_report.py)
- [Postman collection](./postman_collection.json)
- [Render blueprint](./render.yaml)
