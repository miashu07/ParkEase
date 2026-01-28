// src/components/user/Dashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { parkingService } from '../../services/parking';
import { notificationService } from '../../services/notification';
import { FaSearch, FaHistory, FaCar, FaClock, FaMapMarkerAlt, FaQrcode, FaBell } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import NotificationPanel from '../common/NotificationPanel';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeReservations, setActiveReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentZones, setRecentZones] = useState([]);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());
  const [notifiedReservations, setNotifiedReservations] = useState(new Set()); // Track notified reservations
  const [showNotifications, setShowNotifications] = useState(false); // Notification panel state
  const [notifications, setNotifications] = useState([]); // Notifications array
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const logoutTimerRef = useRef(null);

  // Initial data fetch
  useEffect(() => {
    fetchUserData();
  }, []);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-logout and Notification logic
  useEffect(() => {
    const resetTimer = () => setLastActivityTime(Date.now());

    // Add event listeners to track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click', 'keydown'];
    events.forEach(event => window.addEventListener(event, resetTimer, true));

    // Schedule the check for inactivity
    const checkInactive = () => {
      const fifteenMinutes = 15 * 60 * 1000;
      if (Date.now() - lastActivityTime > fifteenMinutes && activeReservations.length === 0) {
        toast('Your session has expired due to inactivity.', { icon: '⏰' });
        logout();
      }
    };

    logoutTimerRef.current = setTimeout(checkInactive, 60000);

    // Notification Scheduling logic
    const scheduleNotifications = async () => {
      for (const reservation of activeReservations) {
        if (reservation.status === 'CONFIRMED') {
          const endTime = new Date(reservation.endTime).getTime();
          const tenMinutes = 10 * 60 * 1000;
          const timeUntilEnd = endTime - Date.now();

          if (timeUntilEnd > 0 && timeUntilEnd <= tenMinutes && !notifiedReservations.has(reservation.id)) {
            const minutesLeft = Math.ceil(timeUntilEnd / 60000);
            toast(`⏰ Parking at ${reservation.zoneName} ends in ${minutesLeft} mins!`, { icon: '🚗' });

            setNotifiedReservations(prev => new Set([...prev, reservation.id]));

            try {
              await notificationService.scheduleEndNotification(reservation.id, 10);
            } catch (error) {
              console.error('Notification error:', error);
            }
          }
        }
      }
    };

    const notificationTimer = setInterval(scheduleNotifications, 60000);

    return () => {
      clearInterval(notificationTimer);
      if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
      events.forEach(event => window.removeEventListener(event, resetTimer, true));
    };
  }, [lastActivityTime, logout, activeReservations.length]); // Dependencies tuned to avoid loops

  const fetchUserData = async () => {
    try {
      const reservations = await parkingService.getUserReservations();
      const active = reservations.filter(r => r.status === 'CONFIRMED' || r.status === 'PENDING');
      setActiveReservations(active);

      const zones = await parkingService.getZones();
      setRecentZones(zones.slice(0, 3));
    } catch (error) {
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">ParkEase</h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link to="/dashboard" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/parking/search" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Find Parking
                </Link>
                <Link to="/reservations" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Reservations
                </Link>
                <Link to="/history" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  History
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header with Time and Quick Actions */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex items-center">
                    <FaClock className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-lg font-semibold text-gray-700">{formatTime(currentTime)}</span>
                  </div>
                  <span className="text-gray-600">{formatDate(currentTime)}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <button
                  onClick={() => navigate('/parking/search')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaSearch className="mr-2 h-5 w-5" />
                  Find Parking
                </button>
                <button
                  onClick={() => navigate('/reservations')}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaCar className="mr-2 h-5 w-5" />
                  My Bookings
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Active Reservations</p>
                  <p className="text-3xl font-bold mt-2">{activeReservations.length}</p>
                </div>
                <FaCar className="h-12 w-12 opacity-50" />
              </div>
              <button
                onClick={() => navigate('/reservations')}
                className="mt-4 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition"
              >
                View All
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Available Zones</p>
                  <p className="text-3xl font-bold mt-2">{recentZones.length}+</p>
                </div>
                <FaMapMarkerAlt className="h-12 w-12 opacity-50" />
              </div>
              <button
                onClick={() => navigate('/parking/search')}
                className="mt-4 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition"
              >
                Explore Zones
              </button>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Quick Park</p>
                  <p className="text-3xl font-bold mt-2">Instant</p>
                </div>
                <FaQrcode className="h-12 w-12 opacity-50" />
              </div>
              <button
                onClick={() => navigate('/parking/quick')}
                className="mt-4 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition"
              >
                Scan & Park
              </button>
            </div>
          </div>

          {/* Active Reservations */}
          <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Active Reservations</h2>
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <FaBell className="h-5 w-5 text-blue-500" />
                    {notifications.filter(n => !n.read).length > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    )}
                  </button>
                  <NotificationPanel
                    isOpen={showNotifications}
                    onClose={() => setShowNotifications(false)}
                    notifications={notifications}
                    onMarkAsRead={(id) => {
                      setNotifications(notifications.map(n =>
                        n.id === id ? { ...n, read: true } : n
                      ));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {loading ? (
                <div className="px-6 py-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                </div>
              ) : activeReservations.length > 0 ? (
                activeReservations.map((reservation) => (
                  <div key={reservation.id} className="px-6 py-4 hover:bg-gray-50 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {reservation.zoneName} - Slot {reservation.slotNumber}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(reservation.startTime).toLocaleString()} - {new Date(reservation.endTime).toLocaleString()}
                        </p>
                        <div className="mt-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${reservation.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                            reservation.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                            {reservation.status}
                          </span>
                          <span className="ml-2 text-sm text-gray-600">
                            ₹{reservation.amount}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => navigate(`/reservation/${reservation.id}`)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          View Details
                        </button>
                        {reservation.status === 'PENDING' && (
                          <button
                            onClick={() => navigate(`/payment/${reservation.id}`)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Pay Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center">
                  <FaCar className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">No active reservations</p>
                  <button
                    onClick={() => navigate('/parking/search')}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Book Parking Now
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Recent Parking Zones */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Popular Parking Zones</h2>
                <Link to="/parking/search" className="text-sm text-blue-600 hover:text-blue-500">
                  View all →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {recentZones.map((zone) => (
                <div
                  key={zone.id}
                  className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer"
                  onClick={() => navigate(`/parking/zone/${zone.id}`)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{zone.name}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <FaMapMarkerAlt className="h-4 w-4 mr-1" />
                        {zone.location}
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${zone.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                      {zone.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Capacity</span>
                      <span className="font-medium">{zone.capacity} slots</span>
                    </div>
                    <div className="mt-3">
                      <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;