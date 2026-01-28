// NotificationPanel.jsx - Functional notification dropdown
import React from 'react';
import { FaBell, FaTimes, FaCheck, FaClock } from 'react-icons/fa';

const NotificationPanel = ({ isOpen, onClose, notifications, onMarkAsRead }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                    <FaBell className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <FaTimes className="h-4 w-4" />
                </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
                {notifications && notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition ${!notification.read ? 'bg-blue-50' : ''
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-1">
                                        <FaClock className="h-3 w-3 text-gray-400 mr-2" />
                                        <p className="text-xs text-gray-500">
                                            {new Date(notification.createdAt || Date.now()).toLocaleString()}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-900 font-medium">{notification.title}</p>
                                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                </div>
                                {!notification.read && (
                                    <button
                                        onClick={() => onMarkAsRead(notification.id)}
                                        className="ml-2 text-blue-500 hover:text-blue-700"
                                        title="Mark as read"
                                    >
                                        <FaCheck className="h-4 w-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-8 text-center">
                        <FaBell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 text-sm">No notifications yet</p>
                        <p className="text-gray-400 text-xs mt-1">
                            You'll see updates about your reservations here
                        </p>
                    </div>
                )}
            </div>

            {/* Footer */}
            {notifications && notifications.length > 0 && (
                <div className="p-3 bg-gray-50 border-t border-gray-200">
                    <button
                        onClick={() => {
                            notifications.forEach(n => onMarkAsRead(n.id));
                        }}
                        className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Mark all as read
                    </button>
                </div>
            )}
        </div>
    );
};

export default NotificationPanel;
