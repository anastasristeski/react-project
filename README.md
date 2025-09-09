# 🎓 Course & Quiz Management Platform

A **full-stack web application** built with **Spring Boot** (backend) and **React** (frontend) that allows users to explore, search, and save courses and quizzes.  
It features **JWT-based authentication**, **real-time search**, **course/quiz management**, and a design styled with **SCSS**.

---

## 🚀 Features

### 🔐 Authentication & Security
- JWT-based authentication (login, token generation & validation).
- Stateless Spring Security configuration.
- CORS enabled for frontend-backend communication.

### 📚 Courses & Quizzes
- Browse and view all available courses and quizzes.
- Save & unsave courses to your personal profile.
- Pagination support for large data sets.
- DTOs to handle clean API responses.

### 🔎 Real-Time Search
- Search courses or quizzes in real-time with debounce.
- Category dropdown toggle (`Courses` / `Quizzes`).

### 🎨 Frontend
- Built with **React**.
- SCSS for modern styling.
- Routing implemented.
- Real-time search results displayed as cards.

### ⚙️ Backend
- **Spring Boot** REST API.
- Models: `User`, `Role`, `Course`, `Quiz`.
- Controllers: manage courses, quizzes, and user actions.
- JPA Repositories for persistence with a relational database.

---

## 🛠️ Tech Stack

**Frontend**
- React
- Axios (API calls)
- React Router
- SCSS

**Backend**
- Spring Boot
- Spring Security (JWT)
- Spring Data JPA
- Lombok
- PostgreSQL

---

🔑 Example Endpoints

GET /api/courses → Fetch all courses

GET /api/courses/paged?page=1&size=10 → Fetch paginated courses

GET /api/courses/saved-courses → Get saved courses for current user

POST /api/courses/user/save-course/{courseId} → Save course for current user

DELETE /api/courses/user/delete-course/{courseId} → Remove course from saved list

---

🖼️ Screenshots (Optional)

