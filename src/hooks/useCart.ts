import { useCallback, useReducer } from 'react';
import { ADD_PRODUCT, cartReducer, CLEAR_CART, REMOVE_PRODUCT, UPDATE_QUANTITY } from '../reducers/cartReducer';
export interface IItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ICartItem extends IItem {
  quantity: number
}

export interface UseCartReturn {
  items: ICartItem[];
  addItem: (item: IItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = (): UseCartReturn => {
  const [items, dispatch] = useReducer(cartReducer, []);
  const cartExample = {
    quantity: 0,
    id: '',
    name: '',
    price: 0,
    image: ''
  };

  const addItem = useCallback((newItem: IItem) => {
    dispatch({ type: ADD_PRODUCT, payload: { ...newItem, quantity: 1 } });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { ...cartExample, id } });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { ...cartExample, id, quantity} });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: CLEAR_CART, payload: { ...cartExample} });
  }, []);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
};