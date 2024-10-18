import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Spline from '@splinetool/react-spline';


// Mock data - replace with actual API calls
const mockProducts = [
  { id: 1, name: 'Apples', location: 'Warehouse A', timestamp: new Date().toISOString(), isFresh: true },
  { id: 2, name: 'Bananas', location: 'Warehouse B', timestamp: new Date().toISOString(), isFresh: true },
  { id: 3, name: 'Oranges', location: 'In Transit', timestamp: new Date().toISOString(), isFresh: false },
];

const mockSupplyChainData = [
  { name: 'Farm', uv: 4000 },
  { name: 'Processing', uv: 3000 },
  { name: 'Distribution', uv: 2000 },
  { name: 'Retail', uv: 2780 },
  { name: 'Consumer', uv: 1890 },
];

const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">Food Supply Chain</Link>
      <div>
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/products" className="text-white mr-4">Products</Link>
        <Link to="/supply-chain" className="text-white">Supply Chain</Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-center bg-black relative">
    {/* Text Section */}
    <div className="w-full md:w-1/2 p-4 text-center md:text-left">
      <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Food Supply Chain Transparency</h1>
      <p className="mb-4 text-white">Track and monitor food products throughout the supply chain.</p>
    </div>

    {/* 3D Model Section */}
    <div className="flex justify-center items-center w-full md:w-1/2 h-[500px] p-4">
      <Spline
        scene="https://prod.spline.design/x6FxgpahMojs9ZSN/scene.splinecode"
        style={{ width: '150%', height: '100%' }}
      />
    </div>
  </div>
);


const ProductList = () => (
  <div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">Product List</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockProducts.map(product => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p><strong>Location:</strong> {product.location}</p>
          <p><strong>Last Updated:</strong> {new Date(product.timestamp).toLocaleString()}</p>
          <p><strong>Freshness:</strong>
            <span className={product.isFresh ? "text-green-500" : "text-red-500"}>
              {product.isFresh ? " Fresh" : " Not Fresh"}
            </span>
          </p>
        </div>
      ))}
    </div>
  </div>
);

const SupplyChain = () => (
  <div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">Supply Chain Visualization</h2>
    <div className="bg-white shadow-md rounded-lg p-4">
      <LineChart width={600} height={300} data={mockSupplyChainData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
