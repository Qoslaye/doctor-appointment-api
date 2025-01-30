**Body:**
```json
{
  "fullName": "Hassan Ali Jimale",
  "email": "Hassan@gmail.com",
  "password": "password123",
  "role": "patient"
}

✅ User Login
POST /api/auth/login
{
  "email": "Hassan@gmail.com",
  "password": "password123"
}

2️⃣ User Management APIs

✅ Get All Users (Doctor)
GET /api/users

✅ Get Single User
GET /api/users/:id

✅ Update User
Update User
PUT /api/users/:id
{
  "fullName": "Updated Name",
  "email": "updated.email@gmail.com"
}

✅ Delete User
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

1️⃣ Clone the Repository

git clone https://github.com/Qoslaye/doctor-appointment-api.git

cd doctor-appointment-api

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/doctor_appointment_system
JWT_SECRET=your_jwt_secret_key

4️⃣ Start the Server
npm run dev

The API will be available at:
http://localhost:5000

### 🛠 Tools for Testing
Postman – Use Postman to test API endpoints.


### 📞 Contact
For questions or issues, contact:
#### 📧 Email: iamqoslaye@gmail.com
#### 🌍 GitHub: https://github.com/Qoslaye
