// src/components/admin/ManageSlots.jsx
import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/admin';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ManageSlots = () => {
  const { zoneId } = useParams();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null);
  const [formData, setFormData] = useState({
    slotNumber: '',
    status: 'AVAILABLE'
  });

  useEffect(() => {
    fetchSlots();
  }, [zoneId]);

  const fetchSlots = async () => {
    try {
      const data = await adminService.getZoneSlots(zoneId);
      setSlots(data);
    } catch (error) {
      console.error('Failed to fetch slots:', error);
      toast.error('Failed to load slots');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSlot) {
        await adminService.updateSlotStatus(editingSlot.id, formData.status);
        toast.success('Slot updated successfully');
      } else {
        await adminService.createSlot(zoneId, formData);
        toast.success('Slot created successfully');
      }
      fetchSlots();
      resetForm();
    } catch (error) {
      console.error('Failed to save slot:', error);
      toast.error(error.response?.data?.message || 'Failed to save slot');
    }
  };

  const handleEdit = (slot) => {
    setEditingSlot(slot);
    setFormData({
      slotNumber: slot.slotNumber,
      status: slot.status
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to remove this slot? This action cannot be undone.')) {
      try {
        // We'll just update the status to 'REMOVED' instead of actually deleting
        await adminService.updateSlotStatus(id, 'REMOVED');
        fetchSlots();
        toast.success('Slot removed successfully');
      } catch (error) {
        console.error('Failed to remove slot:', error);
        toast.error('Failed to remove slot');
      }
    }
  };

  const resetForm = () => {
    setFormData({ slotNumber: '', status: 'AVAILABLE' });
    setEditingSlot(null);
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
            <h1 className="text-3xl font-bold text-gray-900">Manage Parking Slots</h1>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Slot
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">{editingSlot ? 'Edit Slot' : 'Add New Slot'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slot Number *</label>
                <input
                  type="text"
                  value={formData.slotNumber}
                  onChange={(e) => setFormData({ ...formData, slotNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="AVAILABLE">Available</option>
                  <option value="RESERVED">Reserved</option>
                  <option value="OCCUPIED">Occupied</option>
                  <option value="MAINTENANCE">Under Maintenance</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                {editingSlot ? 'Update Slot' : 'Create Slot'}
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slot Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {slots.map((slot) => (
                  <tr key={slot.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{slot.slotNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        slot.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' :
                        slot.status === 'RESERVED' ? 'bg-yellow-100 text-yellow-800' :
                        slot.status === 'OCCUPIED' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {slot.status.charAt(0) + slot.status.slice(1).toLowerCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => handleEdit(slot)}
                className="text-blue-600 hover:text-blue-900 mr-3"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(slot.id)}
                className="text-red-600 hover:text-red-900"
              >
                Remove
              </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {slots.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No parking slots found in this zone. Add a new slot to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSlots;