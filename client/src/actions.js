//CART
export const cartAddItem = () => ({
  type: "CART_ADD_ITEM",
});

export const cartItemAdded = (item, quantity) => ({
  type: "CART_ITEM_ADDED",
  item,
  quantity,
});

export const cartAddItemError = () => ({
  type: "CART_ADD_ITEM_ERROR",
});
export const cartChangeQuantity = (index, quantity) => ({
  type: "CART_CHANGE_QUANTITY",
  index,
  quantity,
});

//ITEMS
export const requestAllItemInformation = () => ({
  type: "REQUEST_ALL_ITEM_INFORMATION",
});

export const receiveProducts = (products) => ({
  type: "RECEIVE_PRODUCTS",
  products,
});

export const receiveCategories = (categories) => ({
  type: "RECEIVE_CATEGORIES",
  categories,
});

export const receiveBrands = (brands) => ({
  type: "RECEIVE_BRANDS",
  brands,
});

export const receiveBrandsError = () => ({
  type: "RECEIVE_BRANDS_ERROR",
});

export const requestBodyLocation = () => ({
  type: "REQUEST_BODY_LOCATION",
});

export const receiveBodyLocation = (bodyLocation) => ({
  type: "RECEIVE_BODY_LOCATION",
  bodyLocation,
});

export const receiveAllItemInformationError = () => ({
  type: "RECEIVE_ALL_ITEM_INFORMATION_ERROR",
});

export const receiveAllItemInformation = () => ({
  type: "RECEIVE_ALL_ITEM_INFORMATION",
});

// SPECIFIC CATEGORY
export const requestCategory = () => ({
  type: "REQUEST_CATEGORY",
});

export const receiveCategory = (category) => ({
  type: "RECEIVE_CATEGORY",
  category,
});

export const receiveCategoryError = () => ({
  type: "RECEIVE_CATEGORY_ERROR",
});

export const resetItems = () => ({
  type: "RESET_ITEM",
});

//Order

export const orderAddItem = () => ({
  type: "ADD_ORDER",
});
export const orderAddedItem = (order) => ({
  type: "ADDED_ORDER",
  order,
});
