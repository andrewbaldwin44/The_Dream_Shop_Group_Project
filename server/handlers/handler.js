const items = require('../data/items.json');
const { findItem } = require('../utils/utils');

function handleBacon(req, res) {
  res.status(200).json('🥓');
}

function modifyInventory(req, res) {
  const { id } = req.body;
  const item = findItem(items, id);

  if (item) {
    if (item.numInStock > 0) {
      item.numInStock--;

      res.status(201).json({status: 201, item: item});
    }
    else {
      res.status(401).json({ status: 401, message: "Item is out of stock" });
    }
  }
  else {
    res.status(401).json({ status: 401, message: "Item could not be found" });
  }
}

module.exports = {
  handleBacon,
  modifyInventory,
};
