// src/components/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { adminService } from '../../services/admin';
import { 
  FaChartLine, FaUsers, FaParking, FaMoneyBillWave, 
  FaCalendarAlt, FaCog, FaBell,
  FaPlus, FaEdit, FaTrash, FaEye, FaCar, FaSignOutAlt
} from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from 'react-hot-toast';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    activeReservations: 0,
    totalUsers: 0,
    occupancyRate: 0,
    weeklyPeakHours: []
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const reports = await adminService.getReports();
      setStats(reports);
      
      // Get recent activities from backend if available
      // For now, using mock data with more variety
      setRecentActivities([
        { id: 1, user: 'John Doe', action: 'Booked parking', time: '2 min ago', type: 'booking' },
        { id: 2, user: 'Admin', action: 'Added new zone', time: '5 min ago', type: 'admin' },
        { id: 3, user: 'Jane Smith', action: 'Cancelled reservation', time: '10 min ago', type: 'cancellation' },
        { id: 4, user: 'Mike Johnson', action: 'Completed payment', time: '15 min ago', type: 'payment' },
        { id: 5, user: 'Sarah Wilson', action: 'Updated profile', time: '20 min ago', type: 'profile' },
        { id: 6, user: 'Admin', action: 'Updated pricing', time: '25 min ago', type: 'admin' },
        { id: 7, user: 'David Brown', action: 'Checked in', time: '30 min ago', type: 'checkin' },
        { id: 8, user: 'Lisa Taylor', action: 'Generated receipt', time: '35 min ago', type: 'receipt' },
      ]);
    } catch (error) {
      toast.error('Failed to load dashboard data');
      // Fallback to default values if API call fails
      setStats({
        totalRevenue: 0,
        activeReservations: 0,
        totalUsers: 0,
        occupancyRate: 0,
        weeklyPeakHours: []
      });
    } finally {
      setLoading(false);
    }
  };

  const chartData = [
    { name: 'Mon', bookings: 45 },
    { name: 'Tue', bookings: 52 },
    { name: 'Wed', bookings: 49 },
    { name: 'Thu', bookings: 61 },
    { name: 'Fri', bookings: 78 },
    { name: 'Sat', bookings: 85 },
    { name: 'Sun', bookings: 70 },
  ];

  const vehicleTypeData = [
    { name: 'Two Wheeler', value: 35, color: '#0088FE' },
    { name: 'Hatchback', value: 40, color: '#00C49F' },
    { name: 'SUV', value: 20, color: '#FFBB28' },
    { name: 'Mini Bus', value: 5, color: '#FF8042' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600 flex items-center">
                  <FaParking className="mr-2" />
                  ParkEase Admin
                </h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link to="/admin/dashboard" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/admin/zones" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Zones
                </Link>
                <Link to="/admin/users" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Users
                </Link>
                <Link to="/admin/pricing" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link to="/admin/reports" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Analytics
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <FaBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FaSignOutAlt className="mr-2 h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Revenue</p>
                  <p className="text-2xl font-bold mt-2">₹{stats.totalRevenue.toFixed(2)}</p>
                </div>
                <FaMoneyBillWave className="h-10 w-10 opacity-50" />
              </div>
              <div className="mt-4 text-sm">
                <span className="opacity-90">+12.5% from last month</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Active Reservations</p>
                  <p className="text-2xl font-bold mt-2">{stats.activeReservations}</p>
                </div>
                <FaCalendarAlt className="h-10 w-10 opacity-50" />
              </div>
              <div className="mt-4 text-sm">
                <span className="opacity-90">{stats.occupancyRate.toFixed(1)}% occupancy</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Users</p>
                  <p className="text-2xl font-bold mt-2">{stats.totalUsers}</p>
                </div>
                <FaUsers className="h-10 w-10 opacity-50" />
              </div>
              <div className="mt-4 text-sm">
                <span className="opacity-90">+24 new this week</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Parking Zones</p>
                  <p className="text-2xl font-bold mt-2">8</p>
                </div>
                <FaParking className="h-10 w-10 opacity-50" />
              </div>
              <div className="mt-4 text-sm">
                <span className="opacity-90">All zones operational</span>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Weekly Bookings Chart */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Weekly Bookings Trend</h2>
                <FaChartLine className="h-5 w-5 text-blue-500" />
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Vehicle Type Distribution */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Vehicle Type Distribution</h2>
                <FaCar className="h-5 w-5 text-green-500" />
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={vehicleTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {vehicleTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => navigate('/admin/zones/new')}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPlus className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Add New Zone</h3>
                        <p className="text-sm text-gray-500">Create new parking zone</p>
                      </div>
                    </button>
                    <button
                      onClick={() => navigate('/admin/pricing')}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaMoneyBillWave className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Update Pricing</h3>
                        <p className="text-sm text-gray-500">Modify hourly rates</p>
                      </div>
                    </button>
                    <button
                      onClick={() => navigate('/admin/users')}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FaUsers className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">User Management</h3>
                        <p className="text-sm text-gray-500">View and manage users</p>
                      </div>
                    </button>
                    <button
                      onClick={() => navigate('/admin/reports')}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FaChartLine className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Detailed Reports</h3>
                        <p className="text-sm text-gray-500">View analytics reports</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="bg-white rounded-xl shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                    <FaBell className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="px-6 py-4">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'booking' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'admin' ? 'bg-green-100 text-green-600' :
                          activity.type === 'cancellation' ? 'bg-red-100 text-red-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {activity.type === 'booking' && <FaCalendarAlt className="h-5 w-5" />}
                          {activity.type === 'admin' && <FaCog className="h-5 w-5" />}
                          {activity.type === 'cancellation' && <FaTrash className="h-5 w-5" />}
                          {activity.type === 'payment' && <FaMoneyBillWave className="h-5 w-5" />}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                          <p className="text-sm text-gray-500">{activity.action}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;