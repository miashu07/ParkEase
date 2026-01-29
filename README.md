# ParkEase - Smart Parking Management System

ParkEase is a comprehensive web-based Parking Management System designed to streamline the parking experience for both users and administrators. It features a robust backend for managing slots, reservations, and payments, coupled with a modern, responsive frontend.

## 🚀 Key Features

*   **User Management**: Secure authentication and authorization using JWT.
*   **Parking Spot Reservation**: Real-time slot availability checking and booking.
*   **Dynamic Pricing**: Configurable hourly rates and vehicle-type based pricing.
*   **Payment Integration**: Demo payment gateway support with currency handling.
*   **QR Code Integration**: Automated QR code generation for entry/exit validation.
*   **Interactive Dashboard**: Visual analytics and reporting for administrators.
*   **Responsive Design**: Built with React and Tailwind CSS for a seamless experience across devices.
*   **Email Notifications**: Automated booking confirmations and updates.

## 🛠 Technology Stack

### Backend
*   **Framework**: Spring Boot 3.4.1
*   **Language**: Java 21
*   **Database**: PostgreSQL
*   **Security**: Spring Security + JWT
*   **Utilities**: Lombok, ZXing (QR Code), JavaMailSender
*   **Build Tool**: Maven

### Frontend
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS, PostCSS
*   **State Management**: Zustand
*   **Charts/Visuals**: Recharts, Framer Motion
*   **HTTP Client**: Axios

## ⚙️ Setup & Installation

### Prerequisites
*   Java Development Kit (JDK) 21 or higher
*   Node.js & npm
*   PostgreSQL installed and running
*   Maven

### 1. Database Setup
Create a PostgreSQL database named `parke`.
```sql
CREATE DATABASE parke;
```

### 2. Backend Setup
1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Configure `src/main/resources/application.properties`:
    *   Update `spring.datasource.username` and `spring.datasource.password` with your PostgreSQL credentials.
3.  Run the application:
    ```bash
    mvn spring-boot:run
    ```
    The backend server will start on `http://localhost:8080`.

### 3. Frontend Setup
1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```
ParkEase/
├── backend/          # Spring Boot Application
│   ├── src/          # Source code
│   └── pom.xml       # Maven dependencies
├── frontend/         # React Application
│   ├── src/          # Components, pages, and logic
│   ├── public/       # Static assets
│   └── package.json  # NPM dependencies
└── README.md
```

## 📝 Configuration
The application is pre-configured with demo modes for easier testing:
*   **Demo Payment**: Enabled by default in `application.properties`.
*   **Demo Email**: Uses simple logging or limited SMTP for testing.
*   **Data Seeding**: Automatically populates the database with initial users, zones, and slots if enabled.

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License
This project is licensed under the MIT License.
