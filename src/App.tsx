import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Receipt from './components/Receipt';
import useStore from './store';

const queryClient = new QueryClient();

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  const clearItems = useStore(state => state.clearItems);
  const balance = useStore(state => state.balance);

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all items from your receipt?")) {
      clearItems();
    }
  };

  return (
    <div className="ml-auto flex items-center gap-4">
      {/* Current Balance */}
      <span className="font-bold text-green-600 whitespace-nowrap">
        ${balance.toLocaleString()}
      </span>

      {/* Navigation Buttons */}
      <button className="font-semibold text-sm" onClick={() => navigate("/spend")}>Spend</button>
      <button className="font-semibold text-sm" onClick={() => navigate("/receipt")}>Receipt</button>
      <button
        className="bg-gray-800 text-white rounded px-3 font-semibold"
        onClick={handleClear}
      >
        AC
      </button>
      <button
        className="border rounded-full px-3 font-semibold"
        onClick={() => window.open("https://github.com/winniegich", "_blank")}
      >
        WG
      </button>
    </div>
  );
};

const SpendPage: React.FC = () => <ProductList />;

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Sticky Header Component */}
        <div className="sticky top-0 z-50">
          <Header /> {/* Keep your original header sticky */}
          
          {/* Top Bar with Elon Musk + Navigation */}
          <div className="bg-gray-50 border-b">
            <div className="flex items-center gap-4 p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                alt="Elon Musk"
                className="h-12 w-12 rounded-full object-cover"
              />
              <h1 className="font-bold text-xl">SPEND ELON'S MONEY</h1>
              <NavigationButtons />
            </div>
          </div>
        </div>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<SpendPage />} />
            <Route path="/spend" element={<SpendPage />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </div>
      </div>
    </Router>
  </QueryClientProvider>
);

export default App;
