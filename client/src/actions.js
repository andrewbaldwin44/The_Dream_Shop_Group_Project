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
export const requestAllItemInformation = () => ({
  type: "REQUEST_ALL_ITEM_INFORMATION"
});

export const receiveProducts = products => ({
  type: "RECEIVE_PRODUCTS",
  products,
});

export const receiveCategories = categories => ({
  type: "RECEIVE_CATEGORIES",
  categories,
});

export const receiveBrands = brands => ({
  type: "RECEIVE_BRANDS",
  brands,
});

export const receiveBodyLocation = bodyLocation => ({
  type: "RECEIVE_BODY_LOCATION",
  location,
});

export const receiveAllItemInformationError = () => ({
  type: "RECEIVE_ALL_ITEM_INFORMATION_ERROR",
});

export const receiveAllItemInformation = () => ({
  type: "RECEIVE_ALL_ITEM_INFORMATION"
});
