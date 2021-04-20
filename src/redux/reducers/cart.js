const initialState = {
  items: {},
  totalPrice: 0,
  totalAmount: 0,
};
const getTotalPrice = (arr) => arr.reduce((acc, curr) => acc + curr.price, 0);
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PIZZA":
      const currentPizza = !state.items[payload.id]
        ? [payload]
        : [...state.items[payload.id].items, payload];
      const newItems = {
        ...state.items,
        [payload.id]: {
          items: currentPizza,
          totalPrice: getTotalPrice(currentPizza),
        },
      };
      const totalAmount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );
      return {
        ...state,
        items: newItems,
        totalAmount,
        totalPrice,
      };

    case "CLEAR_CART":
      return { totalAmount: 0, totalPrice: 0, items: [] };

    case "REMOVE_CART_BLOCK": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[payload].totalPrice;
      const currentTotalAmount = newItems[payload].items.length;
      delete newItems[payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalAmount: state.totalAmount - currentTotalAmount,
      };
    }

    case "PLUS_CART_BLOCK": {
      const newObjItems = [
        ...state.items[payload].items,
        state.items[payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalPrice: Object.keys(newItems).reduce(
          (sum, key) => newItems[key].totalPrice + sum,
          0
        ),
        totalAmount: Object.keys(newItems).reduce(
          (sum, key) => newItems[key].items.length + sum,
          0
        ),
      };
    }
    case "MINUS_CART_BLOCK": {
      const oldItems = state.items[payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalPrice: Object.keys(newItems).reduce(
          (sum, key) => newItems[key].totalPrice + sum,
          0
        ),
        totalAmount: Object.keys(newItems).reduce(
          (sum, key) => newItems[key].items.length + sum,
          0
        ),
      };
    }
    default:
      return state;
  }
};
