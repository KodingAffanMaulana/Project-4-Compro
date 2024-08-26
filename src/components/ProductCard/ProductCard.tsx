import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
