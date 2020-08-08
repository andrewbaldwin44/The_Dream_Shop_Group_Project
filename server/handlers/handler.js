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
  let urlBrand = req.params.brand;
  let companyId = "";
  let companyProducts = [];

  let searchId = brands.forEach((item) => {
    if (item.name === urlBrand) {
      console.log(item.name);
      companyId = item.id;
    }
  });

  items.forEach((item) => {
    if (item.companyId === companyId) {
      console.log(item.companyId);
      companyProducts.push(item);
    }
  });
  console.log("company search", companyId);

  res.status(200).json({ status: 200, items: companyProducts });
}

function handleSpecificProduct(req, res) {
  let productId = req.params.id;
  console.log("productID", productId);

  let product = findItem(items, productId);
  console.log(product);
  res.status(200).json({ status: 200, items: product });
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
