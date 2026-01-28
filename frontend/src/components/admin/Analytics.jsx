// src/components/admin/Analytics.jsx
import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/admin';
import { toast } from 'react-hot-toast';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalRevenue: 0,
    totalBookings: 0,
    totalUsers: 0,
    occupancyRate: 0,
    weeklyPeakHours: [],
    monthlyTrend: [],
    userDemographics: [],
    zonePerformance: [],
    vehicleTypeDistribution: [],
    paymentMethods: [],
    cancellationRate: 0
  });
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('week');

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  const fetchAnalytics = async () => {
    try {
      const data = await adminService.getAnalytics(dateRange);
      setAnalyticsData(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
      toast.error('Failed to load analytics data');
      // Provide mock data in case of error
      setAnalyticsData({
        totalRevenue: 12500.00,
        totalBookings: 245,
        totalUsers: 156,
        occupancyRate: 78.5,
        weeklyPeakHours: [
          { name: '08:00', bookings: 45 },
          { name: '12:00', bookings: 67 },
          { name: '16:00', bookings: 89 },
          { name: '20:00', bookings: 56 },
        ],
        monthlyTrend: [
          { month: 'Jan', revenue: 12500, bookings: 245 },
          { month: 'Feb', revenue: 15600, bookings: 298 },
          { month: 'Mar', revenue: 18700, bookings: 356 },
          { month: 'Apr', revenue: 14200, bookings: 287 },
          { month: 'May', revenue: 19800, bookings: 389 },
          { month: 'Jun', revenue: 21500, bookings: 421 },
        ],
        userDemographics: [
          { name: 'Male', value: 65 },
          { name: 'Female', value: 35 },
        ],
        zonePerformance: [
          { id: 1, name: 'Downtown', revenue: 4500, occupancy: 85 },
          { id: 2, name: 'Mall', revenue: 3200, occupancy: 78 },
          { id: 3, name: 'Airport', revenue: 2800, occupancy: 92 },
          { id: 4, name: 'Hospital', revenue: 1500, occupancy: 65 },
          { id: 5, name: 'Station', revenue: 2000, occupancy: 72 },
        ],
        vehicleTypeDistribution: [
          { name: 'Two Wheeler', value: 35, color: '#0088FE' },
          { name: 'Hatchback', value: 40, color: '#00C49F' },
          { name: 'SUV', value: 20, color: '#FFBB28' },
          { name: 'Mini Bus', value: 5, color: '#FF8042' },
        ],
        paymentMethods: [
          { name: 'Online', value: 70, color: '#0088FE' },
          { name: 'Cash', value: 30, color: '#00C49F' },
        ],
        cancellationRate: 12.5
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.history.back() || (window.location.href='/admin/dashboard')}
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          </div>
          <div className="flex space-x-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Revenue</p>
                <p className="text-2xl font-bold mt-2">₹{analyticsData.totalRevenue.toFixed(2)}</p>
              </div>
              <svg className="h-10 w-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Bookings</p>
                <p className="text-2xl font-bold mt-2">{analyticsData.totalBookings}</p>
              </div>
              <svg className="h-10 w-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Users</p>
                <p className="text-2xl font-bold mt-2">{analyticsData.totalUsers}</p>
              </div>
              <svg className="h-10 w-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 0 11-5 0 2.5 0 015 0z" />
              </svg>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Occupancy Rate</p>
                <p className="text-2xl font-bold mt-2">{analyticsData.occupancyRate.toFixed(1)}%</p>
              </div>
              <svg className="h-10 w-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Peak Hours Chart */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Peak Booking Hours</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData.weeklyPeakHours}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bookings" fill="#3b82f6" name="Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Trend Chart */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Trend</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData.monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="bookings" stroke="#8b5cf6" strokeWidth={2} name="Bookings" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Additional Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Vehicle Type Distribution */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Type Distribution</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analyticsData.vehicleTypeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {analyticsData.vehicleTypeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analyticsData.paymentMethods}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {analyticsData.paymentMethods.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Zone Performance */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Zone Performance</h2>
            <div className="overflow-x-auto max-h-72">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {analyticsData.zonePerformance.map((zone) => (
                    <tr key={zone.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{zone.name}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">₹{zone.revenue}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{zone.occupancy}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancellation Rate</h3>
            <p className="text-3xl font-bold text-blue-600">{analyticsData.cancellationRate.toFixed(1)}%</p>
            <p className="text-sm text-gray-500 mt-1">Lower is better for business</p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Demographics</h3>
            <div className="flex space-x-4 mt-2">
              {analyticsData.userDemographics.map((demo, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-gray-700">{demo.name}</p>
                  <p className="text-xl font-bold text-green-600">{demo.value}%</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Performing Zone</h3>
            <p className="text-2xl font-bold text-purple-600">
              {analyticsData.zonePerformance.reduce((prev, current) => (prev.revenue > current.revenue) ? prev : current, {name: 'N/A'}).name}
            </p>
            <p className="text-sm text-gray-500 mt-1">Highest revenue generating zone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;