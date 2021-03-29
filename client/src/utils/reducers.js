// Comment out the import, we're no longer using this particular Reducer
// Will be exporting something else

// import { useReducer } from "react";

// Should stay the same 
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

// With GlobalState.js being removed I --THINK-- we should call the object from that js here. 

// defaultState is taking the object obtained from GlobalState.js
// It's calling the same exact object that was the const StoreProvider
const defaultState = {
  
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',

}

// Because of the new refactor, call defaultState within the arguments before action 
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

// Export the default state of our reducer (which has defaultState already within it)
export default reducer;

// useReducer from React has been commented out. This has made the current export relatively redundant 

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState)
// }