# 🚗 ParkEase – Smart Parking Reservation System

[![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Security-Spring%20Security%20%2B%20JWT-red?logo=springsecurity)](https://spring.io/projects/spring-security)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](https://www.postgresql.org/)
[![WebSocket](https://img.shields.io/badge/Realtime-WebSocket-yellow)](https://docs.spring.io/spring-framework/reference/web/websocket.html)
[![Swagger](https://img.shields.io/badge/API-Swagger%20%2F%20OpenAPI-85EA2D?logo=swagger)](https://swagger.io/)

---

## 📋 Project Overview

**ParkEase** is a full‑stack smart parking reservation system built with **Spring Boot (Java 21)** and **PostgreSQL**, featuring secure authentication, real‑time slot updates, QR‑based slot identification, pricing management, reservations, demo payments, and an admin analytics dashboard.

The backend follows a layered architecture (Controller → Service → Repository) with DTO mapping, JWT‑based security, schedulers for reservation expiry, Redis support, and WebSocket notifications.
The frontend (React + Vite + Tailwind) provides Admin and User dashboards integrated with these APIs.

---

## ✨ Core Backend Features

### 🔐 Authentication & User Management

* JWT‑based stateless authentication (Spring Security + custom JWT filter)
* User Registration & Login
* Forgot / Reset Password flow
* Profile update APIs
* Role‑based access control (**ADMIN**, **USER**)

### 🚗 Parking Zones & Slots

* Create / update / delete Parking Zones
* Slot configuration and availability management
* Slot status tracking using `SlotStatus` enum
* Automatic **QR Code generation** for every slot (stored as PNG)

### 📅 Reservation System

* Slot reservation with availability checks
* Reservation lifecycle: `PENDING`, `COMPLETED`, `CANCELLED`, `EXPIRED`
* Reservation history per user
* Automatic expiry handled by **ReservationExpiryScheduler**

### 💳 Payment (Demo Integration)

* Demo payment initiation & transaction persistence
* Payment status tracking via `PaymentTransaction`
* Webhook‑style endpoint to receive mock payment updates

### 🚙 Vehicle Management

* Vehicle entity with type support (`VehicleType` enum)
* Vehicle registration linked to users

### 💰 Pricing Module

* Base pricing management
* Dynamic pricing calculation service
* Admin APIs to update rates

### 📊 Admin Analytics

* Dashboard statistics API:

  * Total users
  * Total reservations
  * Active reservations
  * Occupancy rate
  * Revenue summaries

### 🔔 Real‑time Updates

* WebSocket configuration for:

  * Slot status updates
  * Reservation updates

### 🛠️ Technical Highlights

* Global exception handling (`GlobalExceptionHandler`)
* DTO mappers for clean API responses
* JPA Specifications for advanced reservation filtering
* Seeders for demo data, roles, and admin user

---

## 🏗️ Backend Tech Stack

| Category  | Technology                     |
| --------- | ------------------------------ |
| Language  | Java 21                        |
| Framework | Spring Boot 3.x                |
| Security  | Spring Security + JWT          |
| Database  | PostgreSQL 14+                 |
| Realtime  | Spring WebSocket               |
| ORM       | Spring Data JPA                |
| QR Code   | Google ZXing                   |
| API Docs  | SpringDoc OpenAPI (Swagger UI) |
| Scheduler | Spring Task Scheduler          |
| Build     | Maven                          |

---

## 🚀 Backend Setup & Run

### Prerequisites

* Java 21
* PostgreSQL
* Maven

### Run Locally

```bash
./mvnw clean install
./mvnw spring-boot:run
```

Server starts at:

```
http://localhost:8080
```

---

## 📚 API Documentation

After running the backend:

* Swagger UI:
  `http://localhost:8080/swagger-ui.html`

* OpenAPI JSON:
  `http://localhost:8080/v3/api-docs`

---

## 📮 Postman Collection

A ready Postman collection is included:

* `ParkEase_Postman_Collection.json`

Steps:

1. Import into Postman
2. Set environment variable:

   * `base_url = http://localhost:8080`
3. After login, copy JWT token and set:

   * `token = <your_jwt_here>`

---

## 🔮 Future Scope Roadmap (Backend)

* [ ] Real payment gateway integration (Stripe / Razorpay / PayMob)
* [ ] Notification service (Email / SMS)
* [ ] Slot auto‑release on checkout
* [ ] Multi‑city / multi‑branch support
* [ ] Microservices split
* [ ] Kubernetes deployment

---

# 🌐 Frontend (React + Vite) – Reference

The frontend is a separate React application built using **Vite + Tailwind CSS** with role‑based dashboards.

## 🖥️ Frontend Tech Stack

* React 18
* Vite
* Tailwind CSS
* React Router
* Axios
* Recharts (Analytics & charts)(under development)

---

## 📂 Frontend Structure (Highlights)

### 🔐 Auth

* `Login.jsx`
* `Register.jsx`

### 👤 User Dashboard

* `Dashboard.jsx`
* `ParkingSearch.jsx`
* `BookingForm.jsx`
* `Reservations.jsx`
* `History.jsx`
* `Payment.jsx`
* `Receipt.jsx`
* `DemoPayment.jsx`

### 🛠️ Admin Panel

* `AdminDashboard.jsx`
* `ManageZones.jsx`
* `ManageSlots.jsx`
* `PricingManager.jsx`
* `UserManagement.jsx`
* `Analytics.jsx`

### 🔧 Services Layer

* `api.js` – Axios base configuration
* `auth.js` – Auth APIs
* `admin.js` – Admin APIs
* `parking.js` – Parking & slot APIs
* `reservation.js` – Reservation APIs
* `health.js` – Backend health check
* `notification.js` – WebSocket / notification hooks

---

## ▶️ Run Frontend

```bash
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

Make sure backend is running at `http://localhost:8080` and update API base URL in:

```js
// src/services/api.js
export const API_BASE_URL = "http://localhost:8080";
```

---

## 🔗 Frontend–Backend Integration

* JWT token stored in AuthContext
* All protected APIs send `Authorization: Bearer <token>`
* Admin routes guarded using role checks
* Analytics & dashboard charts consume `/admin/analytics` and `/admin/stats`
* Reservation & slot updates can be extended using WebSocket endpoints

---

## 👨‍💻 Author & Project Notes

This project is designed as a **final‑year / enterprise‑style full‑stack system** demonstrating:

* Secure authentication
* Real‑time updates
* Clean backend architecture
* Modern React admin & user dashboards

---

⭐ If you like this project, consider starring the repository and extending it with real payments, notifications, and mobile apps.
