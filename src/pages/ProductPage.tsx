/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductCard from '../components/ProductCard/ProductCard';
import { AppDispatch, RootState } from '../types/types';
import { Link } from 'react-router-dom';
import Loader from '../components/Atoms/Loader';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container max-w-7xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <Link to={`/products/${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
