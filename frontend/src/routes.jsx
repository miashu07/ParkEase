// src/routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import BackendTest from './pages/BackendTest';

// Auth Pages
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// User Pages
import Dashboard from './components/user/Dashboard';
import ParkingSearch from './components/user/ParkingSearch';
import ZoneDetails from './components/user/ZoneDetails';
import BookingForm from './components/user/BookingForm';
import Payment from './components/user/Payment';
import Receipt from './components/user/Receipt';
import Reservations from './components/user/Reservations';
import History from './components/user/History';
import DemoPayment from './components/user/DemoPayment';

// Admin Pages
import AdminDashboard from './components/admin/AdminDashboard';
import ManageZones from './components/admin/ManageZones';
import ManageSlots from './components/admin/ManageSlots';
import PricingManager from './components/admin/PricingManager';
import UserManagement from './components/admin/UserManagement';
import Analytics from './components/admin/Analytics';

// Common Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Private Route Component
const PrivateRoute = ({ children, requireAdmin = false }) => {
    const { user, isAdmin, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (requireAdmin && !isAdmin) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/backend-test" element={<BackendTest />} />
            {/* User Routes */}
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            } />
            <Route path="/parking/search" element={
                <PrivateRoute>
                    <ParkingSearch />
                </PrivateRoute>
            } />
            <Route path="/parking/zone/:id" element={
                <PrivateRoute>
                    <ZoneDetails />
                </PrivateRoute>
            } />
            <Route path="/parking/zone/:zoneId/book" element={
                <PrivateRoute>
                    <BookingForm />
                </PrivateRoute>
            } />
            <Route path="/payment/demo/:reservationId" element={
                <PrivateRoute>
                    <DemoPayment />
                </PrivateRoute>
            } />
            <Route path="/receipt/:reservationId" element={
                <PrivateRoute>
                    <Receipt />
                </PrivateRoute>
            } />
            <Route path="/reservations" element={
                <PrivateRoute>
                    <Reservations />
                </PrivateRoute>
            } />
            <Route path="/history" element={
                <PrivateRoute>
                    <History />
                </PrivateRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
                <PrivateRoute requireAdmin>
                    <AdminDashboard />
                </PrivateRoute>
            } />
            <Route path="/admin/zones" element={
                <PrivateRoute requireAdmin>
                    <ManageZones />
                </PrivateRoute>
            } />
            <Route path="/admin/slots/:zoneId" element={
                <PrivateRoute requireAdmin>
                    <ManageSlots />
                </PrivateRoute>
            } />
            <Route path="/admin/zones/new" element={
                <PrivateRoute requireAdmin>
                    <ManageZones />
                </PrivateRoute>
            } />
            <Route path="/admin/zones/:id/edit" element={
                <PrivateRoute requireAdmin>
                    <ManageZones />
                </PrivateRoute>
            } />
            <Route path="/admin/users" element={
                <PrivateRoute requireAdmin>
                    <UserManagement />
                </PrivateRoute>
            } />
            <Route path="/admin/pricing" element={
                <PrivateRoute requireAdmin>
                    <PricingManager />
                </PrivateRoute>
            } />
            <Route path="/admin/reports" element={
                <PrivateRoute requireAdmin>
                    <Analytics />
                </PrivateRoute>
            } />
            <Route path="/admin/analytics" element={
                <PrivateRoute requireAdmin>
                    <Analytics />
                </PrivateRoute>
            } />
            <Route path="/admin/settings" element={
                <PrivateRoute requireAdmin>
                    <AdminDashboard />
                </PrivateRoute>
            } />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
