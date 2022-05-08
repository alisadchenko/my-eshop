import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case ActionTypes.ADD_ITEM:
      return { ...state,
        cart: state.cart.filter((c) =>
        c.id === action.payload.id ? (c.qty += 1) : c.qty
        ), };
    case ActionTypes.REMOVE_ITEM:
      return { ...state,
        cart: state.cart.filter((c) =>
        c.id === action.payload.id ? (c.qty -= 1) : c.qty
        ), };
    default:
      return state;
  }
  
};