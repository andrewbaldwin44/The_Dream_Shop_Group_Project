function findItem(items, id) {
  return items.find(item => item.id === Number(id));
}

function getRandom(length) {
  return Math.floor(Math.random() * length);
}

function getRandomSample(array, size) {
    const length = array.length;

    for(var i = size; i--;) {
        const index = getRandom(length);
        const temp = array[index];
        array[index] = array[i];
        array[i] = temp;
    }

    return array.slice(0, size);
}

function reduceStock(product, productID, quantity = 1) {
  if (typeof product !== "undefined") {
    if (product.numInStock > 0 && product.numInStock > quantity) {
      product.numInStock -= quantity;
    } else {
      throw new Error(`${product.name} is out of stock!`);
    }
  } else {
    throw new Error(`The product ${productID} could not be found!`);
  }
}

module.exports = {
  findItem,
  reduceStock,
  getRandomSample,
}
