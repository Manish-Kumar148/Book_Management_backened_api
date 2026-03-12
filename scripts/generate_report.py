from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
DOC_DIR = ROOT / "output" / "doc"
PDF_DIR = ROOT / "output" / "pdf"
DOC_DIR.mkdir(parents=True, exist_ok=True)
PDF_DIR.mkdir(parents=True, exist_ok=True)
REPORT_RTF = DOC_DIR / "library_management_report.rtf"
REPORT_TXT = DOC_DIR / "library_management_report.txt"


def read_file(relative_path):
    return (ROOT / relative_path).read_text(encoding="utf-8")


def rtf_escape(text):
    return (
        text.replace("\\", "\\\\")
        .replace("{", "\\{")
        .replace("}", "\\}")
        .replace("\n", "\\par\n")
    )


def main():
    package_json = read_file("package.json")
    app_file = read_file("src/app.js")
    server_file = read_file("src/server.js")
    book_model = read_file("src/models/Book.js")
    controller = read_file("src/controllers/bookController.js")
    routes = read_file("src/routes/bookRoutes.js")
    postman = read_file("postman_collection.json")

    text_report = f"""Library Management System Backend Report
=======================================

B.Tech, 4th Semester
MSE-1 Examination (Practical), Even Semester 2025-26
Course: AI308B, AI Driven Full Stack Development

1. Objective
Develop a backend API for a Library Management System that can add, view, update, delete, and search book records.

2. Technology Stack
- Node.js and Express.js
- MongoDB and Mongoose
- dotenv
- Postman
- GitHub and Render

3. REST API Endpoints
- POST /books : Add a new book
- GET /books : View all books
- GET /books/:id : Get one book by ID
- PUT /books/:id : Update book details
- DELETE /books/:id : Delete a book
- GET /books/search?title=xyz : Search by title
- GET /books/search?author=xyz : Search by author

4. Features Implemented
- Book schema validations
- Unique ISBN
- Proper HTTP status codes
- Error handling middleware
- Async/await and try/catch in controllers
- Render deployment blueprint

5. package.json
{package_json}

6. app.js
{app_file}

7. server.js
{server_file}

8. Book Model
{book_model}

9. Controller Logic
{controller}

10. Routes
{routes}

11. Postman Collection
{postman}

12. Code Output
- GET /health should return server status
- POST /books should return created book with status 201
- GET /books should return all records
- GET /books/search?title=Node should return filtered results

13. MongoDB Book Storage Part
After running npm run seed, the books collection stores title, author, ISBN, genre, publisher, publication year, copy counts, shelf location, book type, and status.

14. Deployment on GitHub and Render
Push the repository to GitHub and deploy on Render using render.yaml.
GitHub Link: _________________________________
Render Link: _________________________________
"""

    rtf_report = "{\\rtf1\\ansi\\deff0\n" + rtf_escape(text_report) + "\n}"

    REPORT_TXT.write_text(text_report, encoding="utf-8")
    REPORT_RTF.write_text(rtf_report, encoding="utf-8")
    print(f"Text report generated at {REPORT_TXT}")
    print(f"RTF report generated at {REPORT_RTF}")


if __name__ == "__main__":
    main()
