import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { parkingService } from '../../services/parking';
import { FaSearch, FaMapMarkerAlt, FaCar, FaInfoCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ParkingSearch = () => {
  const [location, setLocation] = useState('');
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchZones();
  }, []);

  const fetchZones = async (searchLocation = '') => {
    setLoading(true);
    try {
      const data = await parkingService.getZones(searchLocation);
      setZones(data);
    } catch (error) {
      toast.error('Failed to load parking zones');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchZones(location);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Find Parking</h1>
            <p className="text-gray-600">Discover and book the perfect parking spot in seconds.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <FaCar className="mr-2" />
              {zones.length} Zones Available
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-100 transition-all hover:shadow-xl">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city, street or landmark..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-gray-50 focus:bg-white"
              />
            </div>
            <button type="submit" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200">
              Search Now
            </button>
          </form>
        </div>

        {/* Parking Zones grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-500 font-medium">Searching for zones...</p>
          </div>
        ) : zones.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <FaSearch className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No zones found</h3>
            <p className="text-gray-500">We couldn't find any parking zones in that location. Try another search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 bg-blue-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <FaCar className="text-white/20 text-9xl absolute -bottom-4 -right-4 transform rotate-12" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${zone.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                      {zone.isActive ? 'Active' : 'Maintenance'}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{zone.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-gray-600 mb-6">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{zone.location}</span>
                  </div>

                  <div className="flex justify-between items-center py-4 border-y border-gray-50 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-black text-gray-900">{zone.capacity}</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Total Slots</p>
                    </div>
                    <div className="h-8 w-px bg-gray-100"></div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-blue-600">₹50</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Base Price</p>
                    </div>
                  </div>

                  <div className="mt-auto flex space-x-3">
                    <button
                      onClick={() => navigate(`/parking/zone/${zone.id}`)}
                      className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:bg-gray-50 transition-all text-sm flex items-center justify-center"
                    >
                      <FaInfoCircle className="mr-2" />
                      Details
                    </button>
                    <button
                      onClick={() => navigate(`/parking/zone/${zone.id}/book`)}
                      disabled={!zone.isActive}
                      className={`flex-[2] py-3 px-4 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md text-sm ${zone.isActive ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-100' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingSearch;