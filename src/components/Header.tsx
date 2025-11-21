import React from 'react';
import useStore from '../store';

const Header: React.FC = () => {
  const balance = useStore(state => state.balance);
  return (
    <header className="bg-green-700 text-white p-4 text-center text-lg font-bold">
      Current balance: ${balance.toLocaleString()}
    </header>
  );
};

export default Header;