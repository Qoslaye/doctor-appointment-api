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

### **2️⃣ Appointments Collection (`appointments`)**
| Field       | Type    | Description |
|-------------|--------|-------------|
| `_id`       | ObjectId | Unique Appointment ID |
| `patientId` | ObjectId | References `users` (Patient) |
| `doctorId`  | ObjectId | References `users` (Doctor) |
| `date`      | String  | Appointment date |
| `time`      | String  | Appointment time |
| `reason`    | String  | Patient's reason for visit |
| `status`    | String  | `pending`, `approved`, `rejected` (default: `pending`) |
| `createdAt` | Date    | Timestamp of booking |

---

## 🔐 Authentication & Authorization
- **JWT-Based Authentication**  
  - Users must log in to receive a **JWT Token**.
  - The token must be included in the `Authorization` header as:
    ```
    Authorization: Bearer <your_jwt_token>
    ```
- **Role-Based Access**
  - **Patients** can book appointments.
  - **Doctors** can approve/reject appointments.

---

## 🚀 API Endpoints
### **1️⃣ Authentication APIs**
#### ✅ **User Registration**

**Body:**
```json
{
  "fullName": "Hassan Ali Jimale",
  "email": "Hassan@gmail.com",
  "password": "password123",
  "role": "patient"
}

POST /api/auth/login
{
  "email": "Hassan@gmail.com",
  "password": "password123"
}

GET /api/users
GET /api/users/:id
PUT /api/users/:id

{
  "fullName": "Updated Name",
  "email": "updated.email@gmial.com"
}

DELETE /api/users/:id

3️⃣ Appointment APIs
✅ Create Appointment (Patient)
POST /api/appointments
{
  "doctorId": "65a3c9b8b7b44e001cb6e012",
  "date": "2025-02-10",
  "time": "14:00",
  "reason": "Hubin Caafimaad"
}

✅ Get All Appointments (Doctor & Patient)
GET /api/appointments

✅ Update Appointment Status (Doctor Only)
PUT /api/appointments/:id
{
  "status": "approved"
}
✅ Delete Appointment (Doctor/Patient)
DELETE /api/appointments/:id
```

### ⚡ How to Run the Project 
### 1️⃣ Clone the Repository 



