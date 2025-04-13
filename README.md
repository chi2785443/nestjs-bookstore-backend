---

# 📚 Book API

A simple, scalable **Book Management API** built using **NestJS**. This project provides a clean architecture for handling CRUD operations on books and is ready for production or further expansion (like user authentication, database integration, etc.).

---

## 🛠 Tech Stack

| Feature            | Stack/Tool                     |
|--------------------|--------------------------------|
| Framework          | [NestJS](https://nestjs.com)   |
| Language           | TypeScript                     |
| Testing            | Jest, Supertest                |
| Linting/Formatting | ESLint, Prettier               |
| Build Tooling      | Nest CLI                       |

---

## 📁 Project Structure

```bash
.
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── books/                  # Book module, controller, and service
│   └── main.ts                 # App entry point
├── test/                       # E2E and unit tests
├── dist/                       # Compiled output
├── package.json
├── tsconfig.json
├── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run start:dev
```

Server should be running on `http://localhost:3000`

---

## 📦 Available Scripts

| Script             | Description                               |
|--------------------|-------------------------------------------|
| `start`            | Start the app in production mode          |
| `start:dev`        | Start in development mode with hot reload |
| `start:debug`      | Start in debug mode                       |
| `build`            | Build the app                             |
| `test`             | Run unit tests                            |
| `test:watch`       | Watch and run tests                       |
| `test:cov`         | Run test coverage                         |
| `test:e2e`         | Run end-to-end tests                      |
| `lint`             | Run ESLint and auto-fix                   |
| `format`           | Format code using Prettier                |

---

## 📘 API Endpoints (Sample)

> You can use Postman, cURL, or any HTTP client to test endpoints.

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | `/books`       | Get all books       |
| GET    | `/books/:id`   | Get book by ID      |
| POST   | `/books`       | Create a new book   |
| PATCH  | `/books/:id`   | Update book details |
| DELETE | `/books/:id`   | Delete a book       |

> Note: These are assumed endpoints. They depend on your actual controller setup.

---

## 🧪 Testing

Run all unit tests:

```bash
npm run test
```

Run coverage:

```bash
npm run test:cov
```

Run end-to-end tests:

```bash
npm run test:e2e
```

---

## ✨ Future Improvements

- ✅ Add database support (PostgreSQL, MongoDB, etc.)
- ✅ Integrate authentication (JWT, OAuth)
- ✅ Add pagination & filtering
- ✅ Swagger API documentation
- ✅ Dockerize the application

---

## 👨‍💻 Author

**Chinedu Aguwa**  
📧 [neduaguwa443@gmail.com](mailto:neduaguwa443@gmail.com)  
📞 +234 810 547 1046  
[LinkedIn](https://www.linkedin.com/in/chinedu-aguwa-b1747a2b0) • [GitHub](https://github.com/chi2785443)

---
