function findItem(items, id) {
  return items.find(item => item.id === Number(id));
}

function paginateModel(page, limit, model) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return model.slice(startIndex, endIndex);
}

function getQueryValue(queryValue, defaultValue) {
  return queryValue !== undefined ? Number(queryValue) : defaultValue;
}

function reduceStock(product, productID) {
  if (typeof product !== 'undefined') {
    if (product.numInStock > 0) {
      product.numInStock--;
    } else {
      throw new Error(`${product.name} is out of stock!`);
    }
  } else {
    throw new Error(`The product ${productID} could not be found!`);
  }
}

module.exports = {
  findItem,
  paginateModel,
  getQueryValue,
  reduceStock,
}
