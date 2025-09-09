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

🖼️ Screenshots

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 57 49" src="https://github.com/user-attachments/assets/f533cc98-7491-43ec-8a20-97bf7fd83318" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 51 07" src="https://github.com/user-attachments/assets/eb305891-ad06-413b-bf62-fe4cc7862d9a" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 51 19" src="https://github.com/user-attachments/assets/05374de8-98b9-45ac-a015-8c2d2ae6a53c" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 51 25" src="https://github.com/user-attachments/assets/981cf805-ea91-44d0-9916-091be4264eab" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 51 47" src="https://github.com/user-attachments/assets/b4a99e4a-fc6c-4fee-bbf1-4d9a53bc73ad" />
<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 52 02" src="https://github.com/user-attachments/assets/bfda5669-f366-4838-a3d5-308bc3d05902" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 52 02" src="https://github.com/user-attachments/assets/f5330145-8f1a-485b-ad91-a0f294faf64f" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 52 25" src="https://github.com/user-attachments/assets/eab168f2-61de-462e-a6a7-7ae5b0f16b10" />
<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 52 55" src="https://github.com/user-attachments/assets/e28f04f9-6f9b-4c08-b024-4890d01f66d8" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 12 53 03" src="https://github.com/user-attachments/assets/cea0a7ac-f9c2-4ad3-b8d6-e7eb6246360e" />
