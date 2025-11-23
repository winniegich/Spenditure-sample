import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, type Product } from "../api/index.ts";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div className="p-4 text-center">Loading products...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{(error as Error).message}</div>;
  if (!data || data.length === 0) return <div className="p-4 text-center">No products available.</div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
