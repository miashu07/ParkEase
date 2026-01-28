import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { reservationService } from '../../services/reservation';
import { toast } from 'react-hot-toast';

const Receipt = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReservation();
  }, [reservationId]);

  const fetchReservation = async () => {
    try {
      const data = await reservationService.getReceipt(reservationId);
      setReservation(data);
    } catch (error) {
      console.error('Failed to fetch receipt:', error);
      toast.error('Failed to load receipt details');
      // Provide mock data for demo purposes
      setReservation({
        id: reservationId,
        user: { name: 'Demo User', email: 'user@example.com' },
        zoneName: 'Downtown Parking',
        slotNumber: 'A1',
        vehicleType: 'Hatchback',
        vehicleNumber: 'DL-01-AB-1234',
        startTime: new Date(Date.now() - 3600000).toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        amount: 118.00,
        paymentMode: 'Demo Payment',
        status: 'CONFIRMED'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!reservation) return;
    
    // Create a printable version of the receipt
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ParkEase Receipt - #${reservation.id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: white; }
            .receipt-container { max-width: 600px; margin: 0 auto; border: 1px solid #ccc; padding: 20px; background: white; }
            .header { text-align: center; margin-bottom: 20px; }
            .section { margin-bottom: 15px; }
            .section-title { font-weight: bold; margin-bottom: 5px; }
            .row { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .footer { margin-top: 20px; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; color: #3b82f6; margin-bottom: 5px; }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">
              <div class="logo">ParkEase</div>
              <h1>Reservation Receipt</h1>
              <p><strong>Booking ID:</strong> #${reservation.id}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div class="section">
              <div class="section-title">User Information</div>
              <div class="row"><span>Name:</span><span>${user?.name || reservation.user?.name || 'N/A'}</span></div>
              <div class="row"><span>Email:</span><span>${user?.email || reservation.user?.email || 'N/A'}</span></div>
            </div>
            <div class="section">
              <div class="section-title">Parking Details</div>
              <div class="row"><span>Zone:</span><span>${reservation.zoneName || 'N/A'}</span></div>
              <div class="row"><span>Slot:</span><span>${reservation.slotNumber || 'N/A'}</span></div>
              <div class="row"><span>Vehicle Type:</span><span>${reservation.vehicleType || 'N/A'}</span></div>
              <div class="row"><span>Vehicle Number:</span><span>${reservation.vehicleNumber || 'N/A'}</span></div>
            </div>
            <div class="section">
              <div class="section-title">Booking Times</div>
              <div class="row"><span>Start:</span><span>${new Date(reservation.startTime).toLocaleString()}</span></div>
              <div class="row"><span>End:</span><span>${new Date(reservation.endTime).toLocaleString()}</span></div>
            </div>
            <div class="section">
              <div class="section-title">Payment Information</div>
              <div class="row"><span>Amount:</span><span>₹${reservation.amount?.toFixed(2) || '0.00'}</span></div>
              <div class="row"><span>Mode:</span><span>${reservation.paymentMode || 'N/A'}</span></div>
              <div class="row"><span>Status:</span><span>${reservation.status || 'N/A'}</span></div>
            </div>
            <div class="footer">
              <p>Thank you for using ParkEase!</p>
              <p>Safe travels and happy parking.</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  if (!reservation) return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center text-gray-500">
      Reservation not found
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reservation Receipt</h1>
              <p className="text-gray-600">Booking ID: #{reservation.id}</p>
            </div>
              <button
                onClick={handleDownload}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Receipt
              </button>
          </div>

          <div className="border-t border-b border-gray-200 py-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">User Information</h2>
                <p className="text-gray-700"><span className="font-medium">Name:</span> {user?.name || reservation.user?.name || 'N/A'}</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> {user?.email || reservation.user?.email || 'N/A'}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Booking Information</h2>
                <p className="text-gray-700"><span className="font-medium">Status:</span> <span className={`px-2 py-1 rounded-full text-xs ${
                  reservation.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                  reservation.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                  reservation.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>{reservation.status}</span></p>
                <p className="text-gray-700"><span className="font-medium">Reservation ID:</span> #{reservation.id}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Parking Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Zone:</span>
                  <span className="font-medium">{reservation.zoneName || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Slot:</span>
                  <span className="font-medium">{reservation.slotNumber || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle Type:</span>
                  <span className="font-medium">{reservation.vehicleType || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle Number:</span>
                  <span className="font-medium">{reservation.vehicleNumber || 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Times</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Time:</span>
                  <span className="font-medium">{new Date(reservation.startTime).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">End Time:</span>
                  <span className="font-medium">{new Date(reservation.endTime).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{Math.ceil((new Date(reservation.endTime) - new Date(reservation.startTime)) / (1000 * 60))} hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">₹{reservation.amount?.toFixed(2) || '0.00'}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Payment Mode</p>
                <p className="font-medium">{reservation.paymentMode || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button className="text-gray-600 hover:text-gray-900 flex items-center" onClick={() => navigate('/dashboard')}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </button>
            <p className="text-gray-500 text-sm">Generated on {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
