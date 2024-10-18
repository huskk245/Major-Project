import React, { useState } from 'react';
import TrackingModal from './TrackingModal';

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const mockProducts = [
        { id: 1, name: 'Apples', location: 'Farm', timestamp: new Date().toISOString(), isFresh: true },
        { id: 2, name: 'Bananas', location: 'Processing', timestamp: new Date().toISOString(), isFresh: true },
        { id: 3, name: 'Oranges', location: 'Distribution', timestamp: new Date().toISOString(), isFresh: true },
        { id: 4, name: 'Grapes', location: 'Retail', timestamp: new Date().toISOString(), isFresh: true },
        { id: 5, name: 'Pears', location: 'Consumer', timestamp: new Date().toISOString(), isFresh: false },
    ];

    const stages = ['Farm', 'Processing', 'Distribution', 'Retail', 'Consumer'];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const getStageStatus = (productLocation, stage) => {
        const productIndex = stages.indexOf(productLocation);
        const stageIndex = stages.indexOf(stage);

        if (stageIndex < productIndex) return 'completed';
        if (stageIndex === productIndex) return 'current';
        return 'pending';
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProducts.map(product => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 cursor-pointer flex"
                        onClick={() => handleProductClick(product)}
                    >
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p><strong>Location:</strong> {product.location}</p>
                            <p><strong>Last Updated:</strong> {new Date(product.timestamp).toLocaleString()}</p>
                            <p><strong>Freshness:</strong>
                                <span className={product.isFresh ? "text-green-500" : "text-red-500"}>
                                    {product.isFresh ? " Fresh" : " Not Fresh"}
                                </span>
                            </p>
                            <p className="text-blue-500 mt-2">Click for tracking info</p>
                        </div>
                        <div className="ml-4 w-16 flex flex-col items-center">
                            {stages.map((stage, index) => (
                                <React.Fragment key={stage}>
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center
                    ${getStageStatus(product.location, stage) === 'completed' ? 'bg-teal-500' :
                                            getStageStatus(product.location, stage) === 'current' ? 'bg-teal-500' : 'bg-gray-300'}
                    ${index === stages.length - 1 ? '' : 'mb-1'}`}>
                                        {getStageStatus(product.location, stage) === 'completed' && (
                                            <span className="text-white text-xs">✓</span>
                                        )}
                                    </div>
                                    {index < stages.length - 1 && (
                                        <div className={`w-0.5 h-4 
                      ${getStageStatus(product.location, stage) === 'completed' ? 'bg-teal-500' : 'bg-gray-300'}`}>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <TrackingModal
                isOpen={!!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />
        </div>
    );
};

export default ProductList;