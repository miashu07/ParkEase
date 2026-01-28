// src/components/user/BookingForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { parkingService } from '../../services/parking';
import { FaCar, FaClock, FaCreditCard, FaCheck, FaTimes } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const BookingForm = () => {
  const { zoneId } = useParams();
  const navigate = useNavigate();

  const [zone, setZone] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [calculating, setCalculating] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Form fields
  const [vehicleType, setVehicleType] = useState('HATCHBACK');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date(Date.now() + 2 * 60 * 60 * 1000)); // Default 2 hours
  const [duration, setDuration] = useState(2); // hours

  const vehicleTypes = [
    { value: 'TWO_WHEELER', label: 'Two Wheeler', icon: '🏍️' },
    { value: 'HATCHBACK', label: 'Hatchback', icon: '🚗' },
    { value: 'SUV', label: 'SUV', icon: '🚙' },
    { value: 'MINI_BUS', label: 'Mini Bus', icon: '🚐' },
  ];

  useEffect(() => {
    fetchZoneAndSlots();
  }, [zoneId]);

  useEffect(() => {
    calculatePrice();
  }, [vehicleType, duration]);

  const fetchZoneAndSlots = async () => {
    try {
      console.log('🔍 Fetching zones and slots for zoneId:', zoneId);
      const zones = await parkingService.getZones();
      console.log('✅ Got zones:', zones);
      const currentZone = zones.find(z => z.id == zoneId);
      console.log('✅ Current zone:', currentZone);
      setZone(currentZone);

      console.log('🔍 Fetching available slots...');
      const availableSlots = await parkingService.getAvailableSlots(zoneId);
      console.log('✅ Available slots:', availableSlots, 'Count:', availableSlots?.length);
      setSlots(availableSlots);
    } catch (error) {
      toast.error('Failed to load zone information');
    } finally {
      setLoading(false);
    }
  };

  const calculatePrice = async () => {
    if (!vehicleType || duration < 1) return;

    setCalculating(true);
    try {
      const price = await parkingService.calculatePrice(vehicleType, duration);
      setEstimatedPrice(price);
    } catch (error) {
      toast.error('Failed to calculate price');
    } finally {
      setCalculating(false);
    }
  };

  const handleDurationChange = (hours) => {
    if (hours >= 1 && hours <= 24) {
      setDuration(hours);
      const newEndTime = new Date(startTime.getTime() + hours * 60 * 60 * 1000);
      setEndTime(newEndTime);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      toast.error('Please select a parking slot');
      return;
    }

    if (!vehicleNumber.trim()) {
      toast.error('Please enter vehicle number');
      return;
    }



    const bookingData = {
      slotId: selectedSlot.id,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      vehicleType,
      vehicleNumber,
    };

    try {
      const reservation = await parkingService.createReservation(bookingData);
      toast.success('Reservation created successfully!');
      navigate(`/payment/demo/${reservation.id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create reservation');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full flex justify-center">
      <div className="max-w-6xl w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {['Select Zone', 'Choose Slot', 'Booking Details', 'Payment'].map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index < 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {index < 2 ? <FaCheck className="h-5 w-5" /> : index + 1}
                  </div>
                  <span className="mt-2 text-sm font-medium">{step}</span>
                </div>
                {index < 3 && (
                  <div className={`w-24 h-1 mx-4 ${index < 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Zone Information */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{zone?.name}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <FaCar className="h-5 w-5 mr-2" />
                <span>{zone?.location}</span>
                <span className="mx-2">•</span>
                <span>{slots.length} slots available</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Zone ID</p>
              <p className="text-lg font-semibold">#{zone?.id}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Vehicle Information */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  <FaCar className="inline-block mr-2 h-5 w-5 text-blue-500" />
                  Vehicle Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vehicle Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {vehicleTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setVehicleType(type.value)}
                          className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center transition ${vehicleType === type.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          <span className="text-2xl mb-1">{type.icon}</span>
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Vehicle Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Number *
                    </label>
                    <input
                      type="text"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                      placeholder="e.g., MH12AB1234"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Enter your vehicle registration number
                    </p>
                  </div>

                </div>
              </div>

              {/* Time Selection */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  <FaClock className="inline-block mr-2 h-5 w-5 text-blue-500" />
                  Time Selection
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Start Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time *
                    </label>
                    <DatePicker
                      selected={startTime}
                      onChange={(date) => {
                        setStartTime(date);
                        const newEndTime = new Date(date.getTime() + duration * 60 * 60 * 1000);
                        setEndTime(newEndTime);
                      }}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      minDate={new Date()}
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (Hours) *
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => handleDurationChange(Math.max(1, duration - 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
                      >
                        <FaTimes className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="24"
                        value={duration}
                        onChange={(e) => handleDurationChange(parseInt(e.target.value) || 1)}
                        className="w-20 text-center px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleDurationChange(Math.min(24, duration + 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
                      >
                        <FaCheck className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {[1, 2, 4, 8].map((hours) => (
                        <button
                          key={hours}
                          type="button"
                          onClick={() => handleDurationChange(hours)}
                          className={`px-3 py-2 text-sm rounded-lg ${duration === hours
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                          {hours} {hours === 1 ? 'Hour' : 'Hours'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* End Time Display */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">End Time</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {endTime.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Duration</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {duration} {duration === 1 ? 'hour' : 'hours'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slot Selection */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Select Parking Slot
                </h2>

                {slots.length === 0 ? (
                  <div className="text-center py-8">
                    <FaTimes className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-gray-500">No slots available for selected time</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {slots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-4 rounded-lg border-2 flex flex-col items-center transition ${selectedSlot?.id === slot.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${slot.status === 'AVAILABLE'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                          }`}>
                          {slot.slotNumber}
                        </div>
                        <span className="text-sm font-medium">Slot {slot.slotNumber}</span>
                        <span className="text-xs text-gray-500 mt-1">
                          {slot.status}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow sticky top-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  <FaCreditCard className="inline-block mr-2 h-5 w-5 text-blue-500" />
                  Booking Summary
                </h2>

                {/* Price Calculation */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Hourly Rate</span>
                    <span className="font-medium text-gray-900">
                      {calculating ? 'Calculating...' : `₹${(estimatedPrice / duration).toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-900">{duration} hours</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Vehicle Type</span>
                    <span className="font-medium text-gray-900">{vehicleType}</span>
                  </div>
                  {selectedSlot && (
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Selected Slot</span>
                      <span className="font-medium text-gray-900">#{selectedSlot.slotNumber}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-4 bg-gray-50 -mx-6 px-6">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{estimatedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedSlot || !vehicleNumber || calculating}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${selectedSlot && vehicleNumber && !calculating
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-300 cursor-not-allowed'
                      }`}
                  >
                    {calculating ? 'Processing...' : 'Proceed to Payment'}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="w-full py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>

                {/* Important Notes */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <FaCheck className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Minimum booking duration is 1 hour</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>You can cancel free of charge up to 30 minutes before start time</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>QR code will be provided after payment confirmation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default BookingForm;