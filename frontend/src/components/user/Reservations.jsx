import React from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Reservations = () => {
  const reservations = [
    { id: 1, zone: 'Downtown Plaza', slot: 'A12', status: 'Active', time: '2:00 PM - 4:00 PM' },
    { id: 2, zone: 'Mall Parking', slot: 'B05', status: 'Completed', time: 'Yesterday' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Reservations</h1>
        
        <div className="space-y-4">
          {reservations.map((res) => (
            <div key={res.id} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{res.zone}</h3>
                  <div className="flex items-center mt-1 text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Slot {res.slot}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  res.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {res.status}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaClock className="mr-2" />
                <span>{res.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;