// src/components/admin/PricingManager.jsx
import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/admin';
import { toast } from 'react-hot-toast';

const PricingManager = () => {
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPrice, setEditingPrice] = useState(null);
  const [formData, setFormData] = useState({
    vehicleType: '',
    pricePerHour: ''
  });

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const data = await adminService.getPricing();
      setPricing(data);
    } catch (error) {
      console.error('Failed to fetch pricing:', error);
      toast.error('Failed to load pricing data');
      // Provide mock data in case of error
      setPricing([
        { id: 1, vehicleType: 'TWO_WHEELER', pricePerHour: 30.0 },
        { id: 2, vehicleType: 'HATCHBACK', pricePerHour: 50.0 },
        { id: 3, vehicleType: 'SUV', pricePerHour: 70.0 },
        { id: 4, vehicleType: 'MINI_BUS', pricePerHour: 100.0 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPrice) {
        await adminService.updatePricing(editingPrice.id, formData);
        toast.success('Pricing updated successfully');
      } else {
        await adminService.createPricing(formData);
        toast.success('Pricing created successfully');
      }
      fetchPricing();
      resetForm();
    } catch (error) {
      console.error('Failed to save pricing:', error);
      toast.error(error.response?.data?.message || 'Failed to save pricing');
    }
  };

  const handleEdit = (price) => {
    setEditingPrice(price);
    setFormData({
      vehicleType: price.vehicleType,
      pricePerHour: price.pricePerHour
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this pricing? This action cannot be undone.')) {
      try {
        await adminService.deletePricing(id);
        fetchPricing();
        toast.success('Pricing deleted successfully');
      } catch (error) {
        console.error('Failed to delete pricing:', error);
        toast.error('Failed to delete pricing');
      }
    }
  };

  const resetForm = () => {
    setFormData({ vehicleType: '', pricePerHour: '' });
    setEditingPrice(null);
    setShowForm(false);
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
            <h1 className="text-3xl font-bold text-gray-900">Pricing Management</h1>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Price
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">{editingPrice ? 'Edit Pricing' : 'Add New Pricing'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type *</label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="TWO_WHEELER">Two Wheeler</option>
                  <option value="HATCHBACK">Hatchback</option>
                  <option value="SUV">SUV</option>
                  <option value="MINI_BUS">Mini Bus</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Per Hour *</label>
                <input
                  type="number"
                  value={formData.pricePerHour}
                  onChange={(e) => setFormData({ ...formData, pricePerHour: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                {editingPrice ? 'Update Pricing' : 'Create Pricing'}
              </button>
              <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Per Hour</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pricing.map((price) => (
                  <tr key={price.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{price.vehicleType.replace('_', ' ')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{price.pricePerHour.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEdit(price)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(price.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {pricing.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No pricing data found. Add a new pricing rule to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingManager;
