import {
  ADD_TO_CART,
  TOGGLE_AMOUNT,
  REMOVE_FROM_CART,
  GET_SUBTOTALS,
  SET_SHIPPING,
  CLEAR_CART,
} from '../types';

const initialState = {
  items: [],
  subtotal: 0,
  amount: 0,
  shippingAddress: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const tempProduct = action.payload;
      tempProduct.count += 1;
      return {
        ...state,
        items: [...state.items, tempProduct],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case GET_SUBTOTALS:
      const { subtotal, amount } = state.items.reduce(
        (subtotal, item) => {
          const { price, count } = item;
          const itemTotal = parseFloat(price) * count;
          subtotal.subtotal += itemTotal;
          subtotal.amount += count;
          return subtotal;
        },
        { subtotal: 0, amount: 0 }
      );

      return { ...state, subtotal, amount };

    case TOGGLE_AMOUNT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            if (action.payload.toggle === 'inc')
              return { ...item, count: item.count + 1 };

            if (action.payload.toggle === 'dec')
              return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      };

    case SET_SHIPPING:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        subtotal: 0,
        amount: 0,
        shippingAddress: '',
      };

    default:
      return state;
  }
};
