/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Atoms/Loader';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error: any) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container max-w-7xl mx-auto my-10">
      {product ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} className="mb-4" />
          <p>{product.description}</p>
          <p className="font-bold text-xl mt-4">${product.price}</p>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default DetailPage;
