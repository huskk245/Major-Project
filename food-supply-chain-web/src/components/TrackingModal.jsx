import React from 'react';
import { X } from 'lucide-react';

const TrackingModal = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;

    const stages = ['Farm', 'Processing', 'Distribution', 'Retail', 'Consumer'];
    const currentStageIndex = stages.indexOf(product.location);

    const getProgressPercentage = (index) => {
        return ((index + 1) / stages.length) * 100;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-teal-600">{product.name} - Supply Chain Tracking</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                {/* Progress Line */}
                <div className="relative h-2 bg-gray-200 rounded-full mb-6">
                    <div 
                        className="absolute h-full bg-teal-500 rounded-full" 
                        style={{ width: `${getProgressPercentage(currentStageIndex)}%` }}
                    ></div>
                </div>

                <div className="space-y-4">
                    {stages.map((stage, index) => {
                        const isCompleted = index <= currentStageIndex;
                        const isCurrent = index === currentStageIndex;

                        return (
                            <div key={index} className="flex items-start">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                                    isCompleted ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-500'
                                }`}>
                                    {isCompleted ? '✓' : index + 1}
                                </div>
                                <div className="flex-grow">
                                    <p className={`font-semibold ${isCompleted ? 'text-black' : 'text-gray-500'}`}>
                                        {stage}
                                    </p>
                                    {isCurrent && (
                                        <p className="text-sm text-teal-600 mt-1">Current Location</p>
                                    )}
                                    {isCompleted && !isCurrent && (
                                        <p className="text-sm text-gray-600 mt-1">Completed</p>
                                    )}
                                    {!isCompleted && !isCurrent && (
                                        <p className="text-sm text-gray-400 mt-1">Pending</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TrackingModal;