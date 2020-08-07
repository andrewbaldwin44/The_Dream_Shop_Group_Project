const items = require("../data/items.json");
const { findItem } = require("../utils/utils");

function handleBacon(req, res) {
  res.status(200).json("🥓");
}

//Lucas created these Friday
function handleBrands(req, res) {
  res.status(200).json("Brands Go Here");
}
function handleProducts(req, res) {
  const maxItems = items.slice(0, 10);

  res.status(200).json({ status: 200, items: maxItems });
}
function handleCategories(req, res) {
  res.status(200).json(" Categories Go Here");
}
function handleProductCategoriesID(req, res) {
  res.status(200).json(" indicidual Categories Go Here");
}
function handleSpecificBrands(req, res) {
  res.status(200).json("individual brands Go Here");
}
function handleSpecificBrands(req, res) {
  res.status(200).json("individual brands Go Here");
}
function handleSpecificProduct(req, res) {
  res.status(200).json("individual products Go Here");
}
function modifyInventory(req, res) {
  const { id } = req.body;
  const item = findItem(items, id);

  if (item) {
    if (item.numInStock > 0) {
      item.numInStock--;

      res.status(201).json({ status: 201, item: item });
    } else {
      res.status(401).json({ status: 401, message: "Item is out of stock" });
    }
  } else {
    res.status(401).json({ status: 401, message: "Item could not be found" });
  }
}

module.exports = {
  handleBrands,
  handleBacon,
  handleProducts,
  handleCategories,
  handleProductCategoriesID,
  handleSpecificBrands,
  handleSpecificProduct,
  modifyInventory,
};
