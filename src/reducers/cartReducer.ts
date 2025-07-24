
import { ICartItem } from '../hooks/useCart';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

type ICartReducerState = ICartItem[];

type ICartReducerPayload = ICartItem;

export interface ICartAction {
  type: string,
  payload: ICartReducerPayload
}

export const cartReducer = (state: ICartReducerState, action: ICartAction) => {
  switch (action.type) {
  case ADD_PRODUCT: {
    const novoProduto = action.payload;
    const produto = state.findIndex((item) => item.id === novoProduto.id);
    if (produto === -1) {
      return [...state, { ...novoProduto, quantity: 1 }];
    } else {
      return state.map((item, index) =>
        index === produto
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  }
  case REMOVE_PRODUCT: {
    const { id } = action.payload;
    return state.filter((item) => item.id !== id);
  }
  case UPDATE_QUANTITY: {
    const { id, quantity } = action.payload;
    if (quantity <= 0) {
      const newAction = { type: REMOVE_PRODUCT, payload: action.payload }; 
      const newState: ICartReducerState = cartReducer(state, newAction);
      return newState;
    }

    return state.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
  }
  case CLEAR_CART: {
    return [];
  }
  default: {
    return state;
  }
  }
};