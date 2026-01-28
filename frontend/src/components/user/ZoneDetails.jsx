// src/components/user/ZoneDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { parkingService } from '../../services/parking';
import { FaMapMarkerAlt, FaCar, FaArrowLeft, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ZoneDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [zone, setZone] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchZoneDetails();
    }, [id]);

    const fetchZoneDetails = async () => {
        try {
            const data = await parkingService.getZoneById(id);
            setZone(data);
        } catch (error) {
            console.error('Failed to fetch zone details:', error);
            toast.error('Failed to load zone details');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!zone) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Zone Not Found</h2>
                    <Link to="/parking/search" className="text-blue-600 hover:text-blue-700">
                        ← Back to Search
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
                            >
                                <FaArrowLeft className="mr-2" />
                                Back
                            </button>
                            <h1 className="text-2xl font-bold text-blue-600">ParkEase</h1>
                        </div>
                        <Link
                            to="/dashboard"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    {/* Zone Header */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-10 text-white">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h1 className="text-4xl font-bold mb-3">{zone.name}</h1>
                                    <div className="flex items-center text-lg">
                                        <FaMapMarkerAlt className="mr-2" />
                                        <span>{zone.location}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${zone.isActive
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                        }`}>
                                        {zone.isActive ? (
                                            <>
                                                <FaCheckCircle className="mr-2" />
                                                Active
                                            </>
                                        ) : (
                                            <>
                                                <FaTimesCircle className="mr-2" />
                                                Inactive
                                            </>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="px-8 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Capacity */}
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Total Capacity</p>
                                            <p className="text-3xl font-bold text-blue-600">{zone.capacity}</p>
                                            <p className="text-xs text-gray-500 mt-1">parking slots</p>
                                        </div>
                                        <FaCar className="h-12 w-12 text-blue-400" />
                                    </div>
                                </div>

                                {/* Available Slots */}
                                <div className="bg-green-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Available Slots</p>
                                            <p className="text-3xl font-bold text-green-600">
                                                {zone.availableSlots || zone.capacity}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">ready to book</p>
                                        </div>
                                        <FaCheckCircle className="h-12 w-12 text-green-400" />
                                    </div>
                                </div>

                                {/* Occupancy Rate */}
                                <div className="bg-purple-50 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Occupancy</p>
                                            <p className="text-3xl font-bold text-purple-600">
                                                {Math.round(((zone.capacity - (zone.availableSlots || zone.capacity)) / zone.capacity) * 100)}%
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">current usage</p>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">
                                            {zone.capacity - (zone.availableSlots || zone.capacity)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zone Information */}
                    <div className="bg-white rounded-xl shadow p-8 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Zone Name</h3>
                                <p className="text-lg text-gray-900">{zone.name}</p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                                <p className="text-lg text-gray-900">{zone.location}</p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Total Capacity</h3>
                                <p className="text-lg text-gray-900">{zone.capacity} slots</p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                                <p className={`text-lg font-semibold ${zone.isActive ? 'text-green-600' : 'text-red-600'}`}>
                                    {zone.isActive ? 'Active & Operational' : 'Currently Inactive'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {zone.isActive ? (
                                <>
                                    <button
                                        onClick={() => navigate(`/parking/zone/${zone.id}/book`)}
                                        className="flex-1 inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        <FaCar className="mr-3 h-5 w-5" />
                                        Book Parking Now
                                    </button>
                                    <Link
                                        to="/parking/search"
                                        className="flex-1 inline-flex justify-center items-center px-8 py-4 border-2 border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                                    >
                                        View Other Zones
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className="flex-1 bg-gray-100 rounded-lg p-4 text-center">
                                        <p className="text-gray-600">This zone is currently inactive and not available for booking.</p>
                                    </div>
                                    <Link
                                        to="/parking/search"
                                        className="flex-1 inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Find Available Zones
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ZoneDetails;
