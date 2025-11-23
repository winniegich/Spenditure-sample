import React from 'react';
import useStore from '../store';
import { fetchProducts, type Product } from '../api';

const Receipt: React.FC = () => {
  const items = useStore(state => state.items);
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const boughtItems = products.filter(p => items[p.id] > 0);

  if (boughtItems.length === 0)
    return <div className="p-4 text-center">No items bought yet.</div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {boughtItems.map(product => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 w-64 text-center">
          <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
          <p className="text-green-600 font-bold">${product.price.toLocaleString()}</p>
          <p className="font-bold">Quantity: {items[product.id]}</p>
        </div>
      ))}
    </div>
  );
};

export default Receipt;
