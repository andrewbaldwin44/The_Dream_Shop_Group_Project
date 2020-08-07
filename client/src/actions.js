//CART
export const cartAddItem = () => ({
  type: "CART_ADD_ITEM",
});

export const cartItemAdded = (item) => ({
  type: "CART_ITEM_ADDED",
  item,
});

export const cartAddItemError = () => ({
  type: "CART_ADD_ITEM_ERROR",
});

//ITEMS

export const requestItems = () => ({
  type: "REQUEST_ITEMS",
});

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items,
});

export const receiveItemsError = () => ({
  type: "RECEIVE_ITEMS_ERROR",
});
