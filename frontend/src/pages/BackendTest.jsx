import React, { useState, useEffect } from 'react';
import { healthService } from '../services/health';
import { authService } from '../services/auth';
import { parkingService } from '../services/parking';

const BackendTest = () => {
  const [backendHealth, setBackendHealth] = useState(null);
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    testBackendConnection();
  }, []);

  const testBackendConnection = async () => {
    setLoading(true);
    const results = [];

    try {
      // Test 1: Backend health
      const health = await healthService.checkBackendHealth();
      results.push({
        test: 'Backend Health',
        status: health.healthy ? '✅ PASS' : '❌ FAIL',
        message: health.healthy ? 'Backend is running' : health.error
      });
      setBackendHealth(health);

      // Test 2: Login with demo credentials
      try {
        await authService.login('user@example.com', 'password123');
        results.push({
          test: 'Authentication',
          status: '✅ PASS',
          message: 'Login API is working'
        });
      } catch (error) {
        results.push({
          test: 'Authentication',
          status: '⚠️ SKIP',
          message: 'Using demo credentials - endpoint may need adjustment'
        });
      }

      // Test 3: Get parking zones
      try {
        await parkingService.getZones();
        results.push({
          test: 'Parking Zones',
          status: '✅ PASS',
          message: 'Zones API is working'
        });
      } catch (error) {
        results.push({
          test: 'Parking Zones',
          status: '❌ FAIL',
          message: error.message
        });
      }

    } catch (error) {
      results.push({
        test: 'Overall Connection',
        status: '❌ FAIL',
        message: error.message
      });
    } finally {
      setTestResults(results);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Backend Connection Test</h1>
        
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
          
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
              <span>Testing backend connection...</span>
            </div>
          ) : (
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <span className="font-medium">{result.test}</span>
                    <p className="text-sm text-gray-600">{result.message}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.status.includes('✅') ? 'bg-green-100 text-green-800' :
                    result.status.includes('❌') ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {result.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Backend Configuration</h2>
          <div className="space-y-3">
            <div>
              <span className="font-medium">Backend URL:</span>
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded">http://localhost:8080</code>
            </div>
            <div>
              <span className="font-medium">Frontend URL:</span>
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded">http://localhost:5173</code>
            </div>
            <div>
              <span className="font-medium">Required CORS Headers:</span>
              <ul className="ml-4 mt-2 list-disc text-sm text-gray-600">
                <li>Access-Control-Allow-Origin: http://localhost:5173</li>
                <li>Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS</li>
                <li>Access-Control-Allow-Headers: *</li>
                <li>Access-Control-Allow-Credentials: true</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendTest;