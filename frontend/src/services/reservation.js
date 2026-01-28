import api from './api';

export const reservationService = {
  // Create a new reservation
  createReservation: async (reservationData) => {
    try {
      const response = await api.post('/user/reserve', reservationData);
      return response.data;
    } catch (error) {
      console.error('Create reservation error:', error.message);
      throw new Error('Failed to create reservation.');
    }
  },

  // Get reservation by ID
  getReservationById: async (id) => {
    try {
      const response = await api.get(`/user/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get reservation by ID error:', error.message);
      throw new Error('Failed to load reservation.');
    }
  },

  // Process payment for reservation
  processPayment: async (paymentData) => {
    try {
      const response = await api.post('/payment/process', paymentData);
      return response.data;
    } catch (error) {
      console.error('Process payment error:', error.message);
      throw new Error('Failed to process payment.');
    }
  },

  // Update reservation status
  updateReservationStatus: async (id, status) => {
    try {
      const response = await api.put(`/user/reservations/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Update reservation status error:', error.message);
      throw new Error('Failed to update reservation status.');
    }
  },

  // Confirm payment and generate receipt
  confirmPayment: async (reservationId, paymentData) => {
    try {
      const response = await api.post(`/payment/confirm/${reservationId}`, paymentData);
      return response.data;
    } catch (error) {
      console.error('Confirm payment error:', error.message);
      throw new Error('Failed to confirm payment.');
    }
  },

  // Get receipt for reservation
  getReceipt: async (reservationId) => {
    try {
      const response = await api.get(`/receipt/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Get receipt error:', error.message);
      throw new Error('Failed to load receipt.');
    }
  },

  // Download receipt as PDF
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

  // Get user reservations
  getUserReservations: async (userId) => {
    try {
      const response = await api.get(`/user/reservations/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get user reservations error:', error.message);
      throw new Error('Failed to load reservations.');
    }
  },

  // Get all reservations for admin
  getAllReservations: async () => {
    try {
      const response = await api.get('/admin/reservations');
      return response.data;
    } catch (error) {
      console.error('Get all reservations error:', error.message);
      throw new Error('Failed to load reservations.');
    }
  },

  // Cancel reservation
  cancelReservation: async (id) => {
    try {
      const response = await api.delete(`/user/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Cancel reservation error:', error.message);
      throw new Error('Failed to cancel reservation.');
    }
  },

  // Get reservation history for user
  getReservationHistory: async (userId) => {
    try {
      const response = await api.get(`/user/history/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get reservation history error:', error.message);
      throw new Error('Failed to load reservation history.');
    }
  },

  // Get reservation analytics
  getReservationAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/admin/analytics', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get reservation analytics error:', error.message);
      throw new Error('Failed to load analytics.');
    }
  },

  // Get reservation by user ID
  getReservationsByUser: async (userId) => {
    try {
      const response = await api.get(`/user/reservations/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get reservations by user error:', error.message);
      throw new Error('Failed to load user reservations.');
    }
  },

  // Get reservation receipt
  getReceipt: async (reservationId) => {
    try {
      const response = await api.get(`/receipt/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Get receipt error:', error.message);
      throw new Error('Failed to load receipt.');
    }
  },

  // Process payment for reservation
  processPayment: async (paymentData) => {
    try {
      const response = await api.post('/payment/process', paymentData);
      return response.data;
    } catch (error) {
      console.error('Process payment error:', error.message);
      throw new Error('Failed to process payment.');
    }
  },

  // Update reservation status
  updateReservationStatus: async (id, status) => {
    try {
      const response = await api.put(`/user/reservations/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Update reservation status error:', error.message);
      throw new Error('Failed to update reservation status.');
    }
  },

  // Get reservation by ID
  getReservationById: async (id) => {
    try {
      const response = await api.get(`/user/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get reservation by ID error:', error.message);
      throw new Error('Failed to load reservation.');
    }
  },

  // Get user reservations
  getUserReservations: async (userId) => {
    try {
      const response = await api.get(`/user/reservations/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get user reservations error:', error.message);
      throw new Error('Failed to load user reservations.');
    }
  },

  // Get reservation analytics
  getReservationAnalytics: async (dateRange) => {
    try {
      const response = await api.get('/user/analytics/reservations', {
        params: { dateRange }
      });
      return response.data;
    } catch (error) {
      console.error('Get reservation analytics error:', error.message);
      throw new Error('Failed to load reservation analytics.');
    }
  },

  // Schedule end notification for reservation
  scheduleEndNotification: async (reservationId, minutesBefore) => {
    try {
      const response = await api.post('/notifications/schedule-end', {
        reservationId,
        minutesBefore
      });
      return response.data;
    } catch (error) {
      console.error('Schedule end notification error:', error.message);
      throw new Error('Failed to schedule end notification.');
    }
  },

  // Get reservation history for user
  getReservationHistory: async (userId) => {
    try {
      const response = await api.get(`/user/history/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get reservation history error:', error.message);
      throw new Error('Failed to load reservation history.');
    }
  },

  // Get reservations by user ID
  getReservationsByUser: async (userId) => {
    try {
      const response = await api.get(`/user/reservations/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get reservations by user error:', error.message);
      throw new Error('Failed to load user reservations.');
    }
  },

  // Cancel reservation
  cancelReservation: async (id) => {
    try {
      const response = await api.delete(`/user/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Cancel reservation error:', error.message);
      throw new Error('Failed to cancel reservation.');
    }
  },

  // Confirm payment and update reservation status
  confirmPayment: async (reservationId, paymentData) => {
    try {
      const response = await api.post(`/payment/confirm/${reservationId}`, paymentData);
      return response.data;
    } catch (error) {
      console.error('Confirm payment error:', error.message);
      throw new Error('Failed to confirm payment.');
    }
  },

  // Download receipt as PDF
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
  }
};
