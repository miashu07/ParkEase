import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import './styles/main.css';
import { healthService } from './services/health';

function App() {
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    checkBackendConnection();
  }, []);

  const checkBackendConnection = async () => {
    try {
      const health = await healthService.checkBackendHealth();
      if (health.healthy) {
        setBackendStatus('connected');
        console.log('✅ Backend connected successfully');
      } else {
        setBackendStatus('disconnected');
        console.error('❌ Backend connection failed:', health.error);
      }
    } catch (error) {
      setBackendStatus('error');
      console.error('❌ Error checking backend:', error);
    }
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
          {/* Backend Status Indicator */}
          {backendStatus !== 'connected' && (
            <div className={`w-full px-4 py-2 text-center text-sm ${backendStatus === 'checking' ? 'bg-yellow-100 text-yellow-800' :
              backendStatus === 'disconnected' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
              {backendStatus === 'checking' ? '🔍 Checking backend connection...' :
                backendStatus === 'disconnected' ? '❌ Backend disconnected. Using mock data.' :
                  '⚠️ Backend connection error'}
            </div>
          )}

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />

          <main className="w-full">
            <AppRoutes />
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;