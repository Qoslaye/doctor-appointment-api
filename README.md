# 📌 Doctor Appointment API

A RESTful API for managing doctor appointments, built using **Node.js, Express.js, and MongoDB** with **JWT authentication** and **role-based access control**.

---

## 📁 Project Structure (MVC Architecture)
```
doctor-appointment-api/

│── config/             # Database configuration
│── controllers/        # Business logic for Users & Appointments
│── middleware/         # Authentication & Authorization middleware
│── models/             # Mongoose schemas for Users & Appointments
│── routes/             # API route definitions
│── .gitignore          # Ignored files (e.g., node_modules, .env)
│── package.json        # Dependencies and project metadata
│── README.md           # Documentation
│── server.js           # Entry point for the application
```


---

## 🛠 Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**
- **JSON Web Token (JWT)**
- **bcrypt.js** (for password hashing)
- **Postman** (for API testing)

---

## 📦 Database Structure
### **Database Name:** `doctor_appointment_system`

### **1️⃣ Users Collection (`users`)**
| Field     | Type    | Description             |
|-----------|--------|-------------------------|
| `_id`     | ObjectId | Unique User ID |
| `fullName` | String  | User’s full name |
| `email`   | String  | Unique email (required) |
| `password` | String  | Hashed password |
| `role`    | String  | `doctor` or `patient` (default: `patient`) |
| `createdAt` | Date  | Timestamp of creation |
