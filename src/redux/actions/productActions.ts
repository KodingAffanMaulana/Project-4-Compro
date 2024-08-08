/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppThunk } from '../../types/types';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error: any) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};
