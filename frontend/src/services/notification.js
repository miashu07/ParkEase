// src/services/notification.js
import api from './api';

export const notificationService = {
  // Send notification to user before reservation end time
  scheduleEndNotification: async (reservationId, minutesBefore = 10) => {
    try {
      const response = await api.post('/notification/schedule-end', {
        reservationId,
        minutesBefore
      });
      return response.data;
    } catch (error) {
      console.error('Schedule end notification error:', error.message);
      throw new Error('Failed to schedule notification.');
    }
  },

  // Send notification for reservation updates
  sendReservationUpdate: async (reservationId, message) => {
    try {
      const response = await api.post('/notification/reservation-update', {
        reservationId,
        message
      });
      return response.data;
    } catch (error) {
      console.error('Send reservation update notification error:', error.message);
      throw new Error('Failed to send notification.');
    }
  },

  // Get user notifications
  getUserNotifications: async (userId) => {
    try {
      const response = await api.get(`/notification/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get user notifications error:', error.message);
      throw new Error('Failed to load notifications.');
    }
  },

  // Mark notification as read
  markAsRead: async (notificationId) => {
    try {
      const response = await api.put(`/notification/${notificationId}/read`);
      return response.data;
    } catch (error) {
      console.error('Mark notification as read error:', error.message);
      throw new Error('Failed to update notification status.');
    }
  },

  // Mark all notifications as read
  markAllAsRead: async (userId) => {
    try {
      const response = await api.put(`/notification/user/${userId}/read-all`);
      return response.data;
    } catch (error) {
      console.error('Mark all notifications as read error:', error.message);
      throw new Error('Failed to update notification status.');
    }
  },

  // Cancel scheduled notification
  cancelScheduledNotification: async (reservationId) => {
    try {
      const response = await api.delete(`/notification/scheduled/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Cancel scheduled notification error:', error.message);
      throw new Error('Failed to cancel scheduled notification.');
    }
  }
};