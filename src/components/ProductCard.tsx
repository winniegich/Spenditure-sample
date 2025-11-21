import React from 'react';
import useStore from '../store';
import type { Product } from '../api';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { items, buyItem, sellItem } = useStore();

  const quantity = items[product.id] ?? 0;

  return (
    <div className="border p-4 flex flex-col items-center gap-2 max-w-xs">
      <img src={product.imageUrl} alt={product.name} className="h-36 w-full object-cover rounded" />
      <h3 className="font-bold text-lg text-center">{product.name}</h3>
      <p className="text-green-600 font-semibold">${product.price.toLocaleString()}</p>
      <div className="flex justify-center items-center gap-3 w-full mt-2">
        <button
          disabled={quantity === 0}
          onClick={() => sellItem(product.id, product.price)}
          className={`py-1 px-4 rounded disabled:bg-gray-400 bg-gray-600 text-white`}
        >
          Sell
        </button>
        <span className="font-semibold">{quantity}</span>
        <button
          onClick={() => buyItem(product.id, product.price)}
          className="py-1 px-4 rounded bg-green-700 hover:bg-green-800 text-white"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;