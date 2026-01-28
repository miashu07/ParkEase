# 🌐 ParkEase Frontend – React Admin & User Dashboard

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/HTTP-Axios-yellow)](https://axios-http.com/)
[![Recharts](https://img.shields.io/badge/Charts-Recharts-orange)](https://recharts.org/)

---

## 📋 Project Overview

This is the **frontend application** for the **ParkEase Smart Parking Reservation System**.
It provides a modern web interface for both **Users** and **Admins** to interact with the ParkEase backend APIs.

The application is built using **React + Vite + Tailwind CSS** and includes:

* Secure authentication & role-based routing
* User parking search and booking flow
* Demo payment & receipt generation
* Admin dashboards with analytics and management tools

---

## ✨ Key Features

### 🔐 Authentication

* User Login & Registration
* JWT-based session handling using `AuthContext`
* Protected routes for Admin and User dashboards

### 👤 User Module

* Parking zone & slot search
* Booking form and reservation creation
* Active & past reservations history
* Demo payment flow
* Receipt generation after payment

Main screens:

* `Dashboard.jsx`
* `ParkingSearch.jsx`
* `BookingForm.jsx`
* `Reservations.jsx`
* `History.jsx`
* `Payment.jsx`
* `Receipt.jsx`

### 🛠️ Admin Module

* Admin dashboard with statistics cards
* Parking zone management
* Slot management
* Pricing configuration
* User management
* Advanced analytics with charts

Main screens:

* `AdminDashboard.jsx`
* `ManageZones.jsx`
* `ManageSlots.jsx`
* `PricingManager.jsx`
* `UserManagement.jsx`
* `Analytics.jsx`

### 📊 Analytics & Visualization

* Line charts for booking trends
* Bar charts for peak hours & performance
* Pie charts for vehicle type and payments
* Powered by **Recharts**

---

## 🏗️ Tech Stack

| Category      | Technology      |
| ------------- | --------------- |
| Framework     | React 18        |
| Bundler       | Vite            |
| Styling       | Tailwind CSS    |
| Routing       | React Router    |
| HTTP Client   | Axios           |
| Charts        | Recharts        |
| Icons         | React Icons     |
| Notifications | react-hot-toast |

---

## 📂 Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── admin/          # Admin dashboards & management
│   │   ├── auth/           # Login & Register
│   │   ├── user/           # User booking & history pages
│   │   └── layouts/
│   ├── context/           # AuthContext (JWT handling)
│   ├── pages/             # Home, NotFound, BackendTest
│   ├── services/          # API services (auth, admin, parking, reservation)
│   ├── routes.jsx         # Application routes
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🔧 Environment Configuration

The frontend communicates with the Spring Boot backend using Axios.

Edit the API base URL in:

```js
// src/services/api.js
export const API_BASE_URL = "http://localhost:8080";
```

Make sure the backend is running on the same URL and port.

---

## ▶️ Getting Started

### Prerequisites

* Node.js 18+
* npm (or yarn)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User logs in via `/login`
2. Backend returns JWT token
3. Token is stored in `AuthContext`
4. Axios automatically attaches token to requests:

```
Authorization: Bearer <JWT_TOKEN>
```

5. Protected routes check role (`ADMIN` / `USER`) before rendering dashboards

---

## 🔗 Backend Integration

This frontend consumes the following backend modules:

* **Auth APIs** – Login, Register, Profile
* **Parking APIs** – Zones, Slots, Search
* **Reservation APIs** – Book, Cancel, History
* **Payment APIs** – Demo payments & receipts
* **Admin APIs** – Stats, Analytics, Pricing, User management

Important service files:

* `services/api.js` – Axios base config
* `services/auth.js` – Authentication endpoints
* `services/parking.js` – Parking & slot APIs
* `services/reservation.js` – Reservation APIs
* `services/admin.js` – Admin & analytics APIs

---

## 🧪 Backend Test Page

A utility page is available to verify backend connectivity:

* `BackendTest.jsx`

This helps confirm:

* Backend health endpoint is reachable
* CORS configuration is correct

---

## 🔮 Future Enhancements Scope

* [ ] Real-time slot updates using WebSockets
* [ ] Dark mode support
* [ ] Mobile responsive optimization
* [ ] Admin notifications panel
* [ ] Export analytics reports (PDF / Excel)
* [ ] PWA / mobile app version

---

## 👨‍💻 Notes

This frontend is designed to pair with the **ParkEase Spring Boot backend** and demonstrates:

* Role-based dashboards
* Secure JWT authentication
* Modern admin UI with analytics
* Clean service-based API integration

---

⭐ If you like this project, consider improving it with real payments, live notifications, and cloud deployment.
