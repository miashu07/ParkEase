import api from './api';

export const authService = {
  // Login with real API call
  login: async (email, password) => {
    try {
      console.log('Attempting login for:', email);
      
      const response = await api.post('/auth/login', { 
        email, 
        password 
      });
      
      console.log('Login successful:', response.data);
      return response.data;
      
    } catch (error) {
      console.error('Login API Error:', error.response?.data || error.message);
      
      // Provide user-friendly error messages
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response?.status === 401) {
        errorMessage = 'Invalid email or password.';
      } else if (error.response?.status === 404) {
        errorMessage = 'Authentication service unavailable.';
      } else if (error.code === 'ERR_NETWORK') {
        errorMessage = 'Network error. Please check if backend is running on port 8080.';
      }
      
      throw new Error(errorMessage);
    }
  },

  // Register user
  register: async (userData) => {
    try {
      console.log('Registering user:', userData.email);
      
      const response = await api.post('/auth/register', userData);
      console.log('Registration successful:', response.data);
      return response.data;
      
    } catch (error) {
      console.error('Registration API Error:', error.response?.data || error.message);
      
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response?.status === 409) {
        errorMessage = 'Email already registered.';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      throw new Error(errorMessage);
    }
  },

  // Validate token
  validateToken: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return false;
      
      // Make a request to a protected endpoint to check if token is valid
      const response = await api.get('/user/profile');
      return response.status === 200;
      
    } catch (error) {
      console.error('Token validation error:', error.message);
      return false;
    }
  },

  // Forgot password
  forgotPassword: async (email) => {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      console.error('Forgot password error:', error.message);
      throw new Error('Failed to send password reset email.');
    }
  },

  // Logout (frontend only - backend should invalidate token)
  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout API error:', error.message);
      // Continue with frontend logout even if API call fails
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
};