const items = require("../data/items.json");
const brands = require("../data/companies.json");
const { findItem } = require("../utils/utils");

function handleBacon(req, res) {
  res.status(200).json("🥓");
}

function handleProducts(req, res) {
  const maxItems = items.slice(0, 10);

  res.status(200).json({ status: 200, items: maxItems });
}

function handleBrands(req, res) {
  const brandsList = brands.reduce((brandsList, brand) => {
    if (!brandsList.includes(brand)) brandsList.push(brand);

    return brandsList;
  }, []);

  res.status(200).json({ status: 200, brands: brandsList });
}

function handleCategories(req, res) {
  let itemsArray = [];

  items.forEach((item) => {
    if (!itemsArray.includes(item.category)) {
      itemsArray.push(item.category);
    }
  });

  res.status(200).json({ status: 200, items: itemsArray });
}

function handleProductCategoriesID(req, res) {
  let categoryId = req.params.category;
  let productCatArray = [];
  console.log(req.params.category);
  items.forEach((item) => {
    if (item.category === categoryId) {
      productCatArray.push(item);
    }
  });

  res.status(200).json({ status: 200, items: productCatArray });
} //there may be a catch error or 404 needed here in case someone messes up spelling

function handleSpecificBrand(req, res) {
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
  handleSpecificBrand,
  handleSpecificProduct,
  modifyInventory,
};
