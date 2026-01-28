import api from './api';

export const parkingService = {
  // Get all parking zones
  getZones: async (location = null) => {
    try {
      const params = location ? { location } : {};
      const response = await api.get('/user/zones', { params });
      return response.data;
    } catch (error) {
      console.error('Get zones error:', error.message);
      throw new Error('Failed to load parking zones.');
    }
  },

  // Get zone by ID
  getZoneById: async (id) => {
    try {
      const response = await api.get(`/user/zones/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get zone error:', error.message);
      throw new Error('Failed to load parking zone details.');
    }
  },

  // Get available slots in a zone
  getAvailableSlots: async (zoneId) => {
    try {
      const response = await api.get(`/user/slots?zoneId=${zoneId}`);
      return response.data;
    } catch (error) {
      console.error('Get slots error:', error.message);
      throw new Error('Failed to load available slots.');
    }
  },

  // Calculate price
  calculatePrice: async (vehicleType, hours) => {
    try {
      const response = await api.get(`/user/price?vehicleType=${vehicleType}&hours=${hours}`);
      return response.data;
    } catch (error) {
      console.error('Calculate price error:', error.message);
      throw new Error('Failed to calculate price.');
    }
  },

  // Create reservation
  createReservation: async (reservationData) => {
    try {
      console.log('Creating reservation:', reservationData);
      const response = await api.post('/user/reserve', reservationData);
      return response.data;
    } catch (error) {
      console.error('Create reservation error:', error.response?.data || error.message);

      let errorMessage = 'Failed to create reservation.';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      throw new Error(errorMessage);
    }
  },

  // Get user reservations
  getUserReservations: async () => {
    try {
      const response = await api.get('/user/reservations');
      return response.data;
    } catch (error) {
      console.error('Get reservations error:', error.message);
      throw new Error('Failed to load reservations.');
    }
  },

  // Cancel reservation
  cancelReservation: async (reservationId) => {
    try {
      const response = await api.delete(`/user/cancel/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Cancel reservation error:', error.message);
      throw new Error('Failed to cancel reservation.');
    }
  },

  // Get reservation details
  getReservationDetails: async (reservationId) => {
    try {
      const response = await api.get(`/user/reservation/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Get reservation details error:', error.message);
      throw new Error('Failed to load reservation details.');
    }
  }
};