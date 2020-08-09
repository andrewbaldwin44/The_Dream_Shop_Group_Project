const productsData = require("../data/items.json");
const brandsData = require("../data/companies.json");
const {
  findItem,
  paginateModel,
  getQueryValue,
} = require("../utils/utils");

const defaultStartPage = 1;
const defaultPageLimit = 10;

function handleProducts(req, res) {
  const page = getQueryValue(req.query.page, defaultStartPage);
  const limit = getQueryValue(req.query.limit, defaultPageLimit);

  paginatedProducts = paginateModel(page, limit, productsData);

  res.status(200).json({ status: 200, products: paginatedProducts });
}

function handleBrands(req, res) {
  const brandsList = brandsData.reduce((brandsList, brand) => {
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
  productsData.forEach((product) => {
    if (!itemsArray.includes(product.category)) {
      itemsArray.push(product.category);
    }
  });

  res.status(200).json({ status: 200, categories: itemsArray });
}

function handleProductCategoriesID(req, res) {
  let categoryId = req.params.category;
  let productCatArray = [];
  console.log(req.params.category);
  items.forEach((item) => {
  productsData.forEach((item) => {
    if (item.category === categoryId) {
      productCatArray.push(item);
    }
  });

  res.status(200).json({ status: 200, items: productCatArray });
  res.status(200).json({ status: 200, productsData: productCatArray });
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
  const item = findItem(productsData, id);

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
  handleProducts,
  handleCategories,
  handleProductCategoriesID,
  handleSpecificBrand,
  handleSpecificProduct,
  modifyInventory,
};
