import React from "react";
import type { Product } from "../api/index.ts";
import useStore from "../store";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const buyItem = useStore(state => state.buyItem);
  const sellItem = useStore(state => state.sellItem);
  const items = useStore(state => state.items);

  const amount = items[product.id] || 0;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 text-center">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-green-600 font-bold">${product.price.toLocaleString()}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-1 rounded text-white ${
            amount > 0 ? "bg-red-500 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => sellItem(product.id, product.price)}
          disabled={amount === 0}
        >
          Sell
        </button>
        <span className="font-bold">{amount}</span>
        <button
          className="bg-green-500 text-white px-4 py-1 rounded"
          onClick={() => buyItem(product.id, product.price)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
