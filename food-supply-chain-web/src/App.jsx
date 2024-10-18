import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Spline from '@splinetool/react-spline';
import { FaArrowRight } from 'react-icons/fa';

// Add this import at the top of your file
import './smoothScroll.css';
// Add this import for the updated ProductList component
import ProductList from './components/ProductList';

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
  <nav className="bg-gray-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">Food Supply Chain</Link>
      <div className="flex items-center">
        <Link to="/" className="text-white mr-4 hover:text-blue-200 transition duration-300">Home</Link>
        <Link to="/products" className="text-white mr-4 hover:text-blue-200 transition duration-300">Products</Link>
        <Link to="/supply-chain" className="text-white mr-4 hover:text-blue-200 transition duration-300">Supply Chain</Link>
        <Link to="/login" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-full mr-2 hover:from-purple-500 hover:to-purple-600 transition duration-300 ease-in-out">
          Login
        </Link>
        <Link to="/signup" className="inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:from-gray-800 hover:to-gray-900 transition duration-300 ease-in-out">
          Sign Up
        </Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-center bg-black relative min-h-screen">
    {/* Text Section */}
    <div className="w-full md:w-1/2 p-4 mr-25 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Food Supply Chain Transparency</h1>
      <p className="mb-4 text-white">Track and monitor food products throughout the supply chain.</p>
    </div>

    {/* 3D Model Section */}
    <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] p-4 pl-8 md:ml-4 relative">
      <Spline
        scene="https://prod.spline.design/x6FxgpahMojs9ZSN/scene.splinecode"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
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

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Food Supply Chain. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="text-blue-400 hover:text-blue-300 mr-4">Privacy Policy</a>
        <a href="#" className="text-blue-400 hover:text-blue-300 mr-4">Terms of Service</a>
        <a href="#" className="text-blue-400 hover:text-blue-300">Contact Us</a>
      </div>
    </div>
  </footer>
);

const AuthButtons = () => (
  <div className="container mx-auto text-center mt-8 mb-4">
    <Link to="/login" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-full mr-4 hover:from-purple-500 hover:to-purple-600 transition duration-300 ease-in-out">
      Login
      <FaArrowRight className="ml-2" />
    </Link>
    <Link to="/signup" className="inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:from-gray-800 hover:to-gray-900 transition duration-300 ease-in-out">
      Sign Up
      <FaArrowRight className="ml-2" />
    </Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
          </Routes>
        </div>
        {/* Only show AuthButtons on the Home page */}
        <Routes>
          <Route path="/" element={<AuthButtons />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
