import React from 'react';
import { FaHistory } from 'react-icons/fa';

const History = () => {
  const history = [
    { id: 1, date: '2026-01-20', zone: 'Airport Zone', amount: '₹85.00' },
    { id: 2, date: '2026-01-18', zone: 'Downtown Plaza', amount: '₹120.00' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <FaHistory className="h-6 w-6 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Parking History</h1>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Zone</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{item.zone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;