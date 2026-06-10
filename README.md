# 🎫 Ticket Booking System (MERN Stack)

A full-stack Ticket Booking System built using the MERN stack with role-based authentication (Admin, Agent, User). Users can create tickets, agents can manage them, and admins have full system control.

---


🏗️ Setup Instructions

## Backend Setup
cd backend
npm install
npm start

## Frontend Setup
cd frontend
npm install
npm run dev


## 🚀 Live Deployment Links

- 🌐 Frontend (Vercel):  
https://ticket-booking-blue-seven.vercel.app/

- 🛠 Backend (Render):  
https://ticket-booking-51f1.onrender.com

---

## 📂 Git Repository

- GitHub: (https://github.com/TharshiTharshihan/ticket-booking.git)

---

## 👥 Test Credentials

### 🔴 Admin
- Email: `admin@gmail.com`
- Password: `123@Aa123`

### 🟠 Agent
- Email: `agent@gmail.com`
- Password: `123@Aa123`

### 🟠 Agent1
- Email: `agent1@gmail.com`
- Password: `123@Aa123`

### 🟢 Users
- Email: `tharshihan2000@gmail.com`
- Email: `user1@gmail.com`
- Password (for all users): `123@Aa123`

---

## ⚙️ Environment Variables

### 🔧 Backend (.env)

PORT=5000
MONGO_URI=mongodb+srv://tharshihan2000_db_user:Li9G13VDW4KIdves@cluster0.yc0mivr.mongodb.net/?appName=Cluster0
JWT_SECRET=tharshihan

### 🎨 Frontend (.env)

VITE_API_URL=http://localhost:5000/api



# 🔌 API Endpoints Summary

🔐 Authentication
POST /api/auth/register → Register user
POST /api/auth/login → Login user
POST /api/auth/logout → Logout user

🎟 Tickets

GET /api/tickets/all → Get all tickets
POST /api/tickets/create → Create ticket
GET /api/tickets/my/:userId → Get myticket by ID
GET /api/tickets/assigned/:agentId → Get agent ticket by ID
PUT /api/tickets/:id → Update ticket






