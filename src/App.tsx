import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './components/Header';
import ProductList from './components/ProductList';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center gap-4 p-4 border-b">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_Royal_Society_%28crop1%29.jpg"
          alt="Elon Musk"
          className="h-12 w-12 rounded-full object-cover"
        />
        <h1 className="font-bold text-xl">SPEND ELON'S MONEY</h1>
        <div className="ml-auto flex gap-4">
          <button className="font-semibold text-sm">Spend</button>
          <button className="font-semibold text-sm">Receipt</button>
          <button className="bg-gray-800 text-white rounded px-3 font-semibold">AC</button>
          <button className="border rounded-full px-3 font-semibold">DO</button>
        </div>
      </div>
      <ProductList />
    </div>
  </QueryClientProvider>
);

export default App;