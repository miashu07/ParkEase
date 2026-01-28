import api from './api';

export const adminService = {
  // Parking Zone Management
  createZone: async (zoneData) => {
    try {
      const response = await api.post('/admin/zone', zoneData);
      return response.data;
    } catch (error) {
      console.error('Create zone error:', error.message);
      throw new Error('Failed to create parking zone.');
    }
  },

  getZones: async () => {
    try {
      const response = await api.get('/admin/zones');
      return response.data;
    } catch (error) {
      console.error('Get zones error:', error.message);
      throw new Error('Failed to load parking zones.');
    }
  },

  updateZone: async (id, zoneData) => {
    try {
      const response = await api.put(`/admin/zones/${id}`, zoneData);
      return response.data;
    } catch (error) {
      console.error('Update zone error:', error.message);
      throw new Error('Failed to update parking zone.');
    }
  },

  deleteZone: async (id) => {
    try {
      const response = await api.delete(`/admin/zones/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete zone error:', error.message);
      throw new Error('Failed to delete parking zone.');
    }
  },

  // Slot Management
  createSlot: async (zoneId, slotData) => {
    try {
      const response = await api.post(`/admin/zones/${zoneId}/slots`, slotData);
      return response.data;
    } catch (error) {
      console.error('Create slot error:', error.message);
      throw new Error('Failed to create parking slot.');
    }
  },

  getZoneSlots: async (zoneId) => {
    try {
      const response = await api.get(`/admin/zones/${zoneId}/slots`);
      return response.data;
    } catch (error) {
      console.error('Get zone slots error:', error.message);
      throw new Error('Failed to load parking slots.');
    }
  },

  updateSlotStatus: async (slotId, status) => {
    try {
      const response = await api.put(`/admin/slots/${slotId}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Update slot status error:', error.message);
      throw new Error('Failed to update slot status.');
    }
  },

  // Pricing Management
  getPricing: async () => {
    try {
      const response = await api.get('/admin/pricing');
      return response.data;
    } catch (error) {
      console.error('Get pricing error:', error.message);
      throw new Error('Failed to load pricing information.');
    }
  },

  createPricing: async (priceData) => {
    try {
      const response = await api.post('/admin/pricing', priceData);
      return response.data;
    } catch (error) {
      console.error('Create pricing error:', error.message);
      throw new Error('Failed to create pricing.');
    }
  },

  updatePricing: async (id, priceData) => {
    try {
      const response = await api.put(`/admin/pricing/${id}`, priceData);
      return response.data;
    } catch (error) {
      console.error('Update pricing error:', error.message);
      throw new Error('Failed to update pricing.');
    }
  },

  deletePricing: async (id) => {
    try {
      const response = await api.delete(`/admin/pricing/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete pricing error:', error.message);
      throw new Error('Failed to delete pricing.');
    }
  },

  // Analytics and Reports
  getReports: async () => {
    try {
      const response = await api.get('/admin/reports');
      return response.data;
    } catch (error) {
      console.error('Get reports error:', error.message);
      throw new Error('Failed to load reports.');
    }
  },

  getAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/admin/analytics', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get analytics error:', error.message);
      throw new Error('Failed to load analytics.');
    }
  },

  // User Management
  getUsers: async () => {
    try {
      const response = await api.get('/admin/users');
      return response.data;
    } catch (error) {
      console.error('Get users error:', error.message);
      throw new Error('Failed to load users.');
    }
  },

  createUser: async (userData) => {
    try {
      const response = await api.post('/admin/users', userData);
      return response.data;
    } catch (error) {
      console.error('Create user error:', error.message);
      throw new Error('Failed to create user.');
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/admin/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Update user error:', error.message);
      throw new Error('Failed to update user.');
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await api.delete(`/admin/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Delete user error:', error.message);
      throw new Error('Failed to delete user.');
    }
  },

  updateUserStatus: async (userId, status) => {
    try {
      const response = await api.put(`/admin/users/${userId}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Update user status error:', error.message);
      throw new Error('Failed to update user status.');
    }
  },

  // Slot Management
  getZoneSlots: async (zoneId) => {
    try {
      const response = await api.get(`/admin/zones/${zoneId}/slots`);
      return response.data;
    } catch (error) {
      console.error('Get zone slots error:', error.message);
      throw new Error('Failed to load zone slots.');
    }
  },

  createSlot: async (zoneId, slotData) => {
    try {
      const response = await api.post(`/admin/zones/${zoneId}/slots`, slotData);
      return response.data;
    } catch (error) {
      console.error('Create slot error:', error.message);
      throw new Error('Failed to create slot.');
    }
  },

  updateSlotStatus: async (slotId, status) => {
    try {
      const response = await api.put(`/admin/slots/${slotId}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Update slot status error:', error.message);
      throw new Error('Failed to update slot status.');
    }
  },

  // Parking Zone Management (additional methods)
  getZoneById: async (id) => {
    try {
      const response = await api.get(`/admin/zones/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get zone by ID error:', error.message);
      throw new Error('Failed to load parking zone.');
    }
  },

  updateZone: async (id, zoneData) => {
    try {
      const response = await api.put(`/admin/zones/${id}`, zoneData);
      return response.data;
    } catch (error) {
      console.error('Update zone error:', error.message);
      throw new Error('Failed to update parking zone.');
    }
  },

  deleteZone: async (id) => {
    try {
      const response = await api.delete(`/admin/zones/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete zone error:', error.message);
      throw new Error('Failed to delete parking zone.');
    }
  },

  // User Management (additional methods)
  getUserById: async (id) => {
    try {
      const response = await api.get(`/admin/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get user by ID error:', error.message);
      throw new Error('Failed to load user.');
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await api.put(`/admin/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error('Update user error:', error.message);
      throw new Error('Failed to update user.');
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await api.delete(`/admin/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete user error:', error.message);
      throw new Error('Failed to delete user.');
    }
  },

  // Additional methods for reservation management are already defined above

  // Base Price Management (for pricing)
  getBasePrices: async () => {
    try {
      const response = await api.get('/admin/base-prices');
      return response.data;
    } catch (error) {
      console.error('Get base prices error:', error.message);
      throw new Error('Failed to load base prices.');
    }
  },

  getBasePriceById: async (id) => {
    try {
      const response = await api.get(`/admin/base-prices/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get base price by ID error:', error.message);
      throw new Error('Failed to load base price.');
    }
  },

  createBasePrice: async (priceData) => {
    try {
      const response = await api.post('/admin/base-prices', priceData);
      return response.data;
    } catch (error) {
      console.error('Create base price error:', error.message);
      throw new Error('Failed to create base price.');
    }
  },

  updateBasePrice: async (id, priceData) => {
    try {
      const response = await api.put(`/admin/base-prices/${id}`, priceData);
      return response.data;
    } catch (error) {
      console.error('Update base price error:', error.message);
      throw new Error('Failed to update base price.');
    }
  },

  deleteBasePrice: async (id) => {
    try {
      const response = await api.delete(`/admin/base-prices/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete base price error:', error.message);
      throw new Error('Failed to delete base price.');
    }
  },

  // Reservation Management
  getReservations: async () => {
    try {
      const response = await api.get('/admin/reservations');
      return response.data;
    } catch (error) {
      console.error('Get reservations error:', error.message);
      throw new Error('Failed to load reservations.');
    }
  },

  getReservationById: async (id) => {
    try {
      const response = await api.get(`/admin/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get reservation by ID error:', error.message);
      throw new Error('Failed to load reservation.');
    }
  },

  updateReservationStatus: async (id, status) => {
    try {
      const response = await api.put(`/admin/reservations/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Update reservation status error:', error.message);
      throw new Error('Failed to update reservation status.');
    }
  },

  // Notification Management
  scheduleEndNotification: async (reservationId, minutesBefore) => {
    try {
      const response = await api.post('/admin/notifications/schedule-end', {
        reservationId,
        minutesBefore
      });
      return response.data;
    } catch (error) {
      console.error('Schedule end notification error:', error.message);
      throw new Error('Failed to schedule end notification.');
    }
  },

  getNotifications: async (userId) => {
    try {
      const response = await api.get(`/admin/notifications/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get notifications error:', error.message);
      throw new Error('Failed to load notifications.');
    }
  },

  markNotificationAsRead: async (notificationId) => {
    try {
      const response = await api.put(`/admin/notifications/${notificationId}/read`);
      return response.data;
    } catch (error) {
      console.error('Mark notification as read error:', error.message);
      throw new Error('Failed to mark notification as read.');
    }
  },

  // Receipt Management
  getReceipt: async (reservationId) => {
    try {
      const response = await api.get(`/receipt/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Get receipt error:', error.message);
      throw new Error('Failed to load receipt.');
    }
  },

  downloadReceipt: async (reservationId) => {
    try {
      const response = await api.get(`/receipt/download/${reservationId}`, {
        responseType: 'blob'
      });
      return response.data;
    } catch (error) {
      console.error('Download receipt error:', error.message);
      throw new Error('Failed to download receipt.');
    }
  },

  // Reservation Analytics
  getReservationAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/admin/analytics/reservations', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get reservation analytics error:', error.message);
      throw new Error('Failed to load reservation analytics.');
    }
  },

  // User Analytics
  getUserAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/admin/analytics/users', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get user analytics error:', error.message);
      throw new Error('Failed to load user analytics.');
    }
  },

  // Zone Analytics
  getZoneAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/admin/analytics/zones', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get zone analytics error:', error.message);
      throw new Error('Failed to load zone analytics.');
    }
  },

  // Revenue Analytics
  getRevenueAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/admin/analytics/revenue', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get revenue analytics error:', error.message);
      throw new Error('Failed to load revenue analytics.');
    }
  }
};
