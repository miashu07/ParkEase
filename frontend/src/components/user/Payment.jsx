import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { reservationService } from '../../services/reservation';
import { toast } from 'react-hot-toast';

const Payment = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('online');

  useEffect(() => {
    fetchReservation();
  }, [reservationId]);

  const fetchReservation = async () => {
    try {
      const data = await reservationService.getReservationById(reservationId);
      setReservation(data);
    } catch (error) {
      console.error('Failed to fetch reservation:', error);
      toast.error('Failed to load reservation details');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!reservation) return;
    
    setLoading(true);
    try {
      // Process payment based on selected method
      const paymentData = {
        reservationId: reservation.id,
        amount: reservation.amount,
        paymentMode: paymentMethod
      };

      // Confirm payment and update reservation status
      const response = await reservationService.confirmPayment(reservation.id, paymentData);
      
      toast.success('Payment successful!');
      navigate(`/receipt/${reservation.id}`);
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );

  if (!reservation) return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto text-center py-12">
        <p className="text-gray-500">Reservation not found.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Complete Payment</h1>
          </div>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Reservation Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="font-medium text-gray-700">Zone:</span> {reservation.zoneName}</div>
              <div><span className="font-medium text-gray-700">Slot:</span> {reservation.slotNumber}</div>
              <div><span className="font-medium text-gray-700">Start Time:</span> {new Date(reservation.startTime).toLocaleString()}</div>
              <div><span className="font-medium text-gray-700">End Time:</span> {new Date(reservation.endTime).toLocaleString()}</div>
              <div><span className="font-medium text-gray-700">Vehicle:</span> {reservation.vehicleType}</div>
              <div><span className="font-medium text-gray-700">Amount:</span> ₹{reservation.amount.toFixed(2)}</div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod('online')}
                className={`p-4 border rounded-lg flex flex-col items-center ${
                  paymentMethod === 'online' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span>Online Payment</span>
              </button>
              <button
                onClick={() => setPaymentMethod('qr')}
                className={`p-4 border rounded-lg flex flex-col items-center ${
                  paymentMethod === 'qr' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                <span>QR Code</span>
              </button>
              <button
                onClick={() => setPaymentMethod('cash')}
                className={`p-4 border rounded-lg flex flex-col items-center ${
                  paymentMethod === 'cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                <svg className="w-8 h-8 text-yellow-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Cash</span>
              </button>
            </div>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-800 mb-2">Payment Instructions</h3>
            <p className="text-sm text-blue-700">
              {paymentMethod === 'online' && 'Complete online payment using UPI, credit/debit card or net banking.'}
              {paymentMethod === 'qr' && 'Scan the QR code at the parking entrance to make payment.'}
              {paymentMethod === 'cash' && 'Pay cash at the parking counter before entering the zone.'}
            </p>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing Payment...
              </>
            ) : (
              `Pay ₹${reservation.amount.toFixed(2)}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
