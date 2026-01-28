// src/components/user/DemoPayment.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCreditCard, FaLock, FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const DemoPayment = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('4111111111111111');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('123');
  const [cardName, setCardName] = useState('Demo User');
  const [simulateFailure, setSimulateFailure] = useState(false);
  
  const testCards = [
    { number: '4111111111111111', label: 'Success Card', type: 'Visa' },
    { number: '4000000000000002', label: 'Failure Card', type: 'Visa' },
    { number: '5555555555554444', label: 'MasterCard', type: 'MasterCard' },
  ];

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (simulateFailure) {
        throw new Error('Payment failed: Insufficient funds');
      }
      
      // Demo payment API call
      const response = await fetch(`http://localhost:8080/payment/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          reservationId,
          amount: 100.0,
          paymentMode: 'CARD_DEMO'
        })
      });
      
      if (!response.ok) {
        throw new Error('Payment failed');
      }
      
      const data = await response.json();
      
      toast.success('Payment successful!');
      navigate(`/receipt/${reservationId}`);
      
    } catch (error) {
      toast.error(error.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTestCardSelect = (cardNumber) => {
    setCardNumber(cardNumber);
    setSimulateFailure(cardNumber === '4000000000000002');
    toast.success('Test card selected. ' + 
      (cardNumber === '4000000000000002' 
        ? 'This will simulate a payment failure.' 
        : 'This will simulate a successful payment.'));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Mode Banner */}
        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-center">
            <FaInfoCircle className="h-5 w-5 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">DEMO MODE</h3>
              <p className="text-sm text-yellow-700 mt-1">
                You are in demo payment mode. No real transactions will occur.
                Use the test cards below to simulate different scenarios.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCreditCard className="h-6 w-6 text-white mr-3" />
                <h1 className="text-xl font-semibold text-white">
                  Demo Payment - Reservation #{reservationId}
                </h1>
              </div>
              <div className="text-white text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                DEMO
              </div>
            </div>
          </div>

          {/* Test Cards Section */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-3">
              Test Credit Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {testCards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => handleTestCardSelect(card.number)}
                  className={`p-3 border rounded-lg text-left transition ${
                    cardNumber === card.number
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{card.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{card.type}</p>
                    </div>
                    <div className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                      ****{card.number.slice(-4)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="px-6 py-6">
            <form className="space-y-6">
              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['card', 'upi', 'netbanking'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`p-4 border rounded-lg flex flex-col items-center justify-center transition ${
                        paymentMethod === method
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center ${
                        paymentMethod === method ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <FaCreditCard className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium capitalize">{method}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Details */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                        placeholder="1234 5678 9012 3456"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <FaLock className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Failure Simulation */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="simulateFailure"
                      checked={simulateFailure}
                      onChange={(e) => setSimulateFailure(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="simulateFailure" className="ml-2 block text-sm text-gray-900">
                      Simulate payment failure
                    </label>
                  </div>
                </div>
              )}

              {/* Amount Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Payment Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Reservation Amount</span>
                    <span className="font-medium">₹100.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (18%)</span>
                    <span className="font-medium">₹18.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Convenience Fee</span>
                    <span className="font-medium">₹0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-base font-semibold">Total Amount</span>
                      <span className="text-lg font-bold text-blue-600">₹118.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="text-sm text-gray-600">
                <p className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 mr-2"
                    defaultChecked
                  />
                  <label htmlFor="terms">
                    I agree to the Terms and Conditions and authorize ParkEase to charge my card for this transaction.
                    This is a demo payment and no real money will be deducted.
                  </label>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={loading}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium text-white transition flex items-center justify-center ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : simulateFailure
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing...
                    </>
                  ) : simulateFailure ? (
                    <>
                      <FaTimes className="mr-2 h-5 w-5" />
                      Simulate Failed Payment
                    </>
                  ) : (
                    <>
                      <FaCheck className="mr-2 h-5 w-5" />
                      Pay ₹118.00 (Demo)
                    </>
                  )}
                </button>
              </div>

              {/* Security Note */}
              <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <FaLock className="h-3 w-3 mr-1" />
                  <span>This is a secure demo payment. Your card details are not stored.</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Demo Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">
            Demo Payment Instructions
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Use <strong>4111 1111 1111 1111</strong> for successful payments</li>
            <li>• Use <strong>4000 0000 0000 0002</strong> to simulate payment failure</li>
            <li>• No real money is charged in demo mode</li>
            <li>• All transactions are simulated for testing purposes</li>
            <li>• Receipts will be generated but represent demo transactions only</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DemoPayment;