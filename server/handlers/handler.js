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

  productsData.forEach((product) => {
    if (!itemsArray.includes(product.category)) {
      itemsArray.push(product.category);
    }
  });

  res.status(200).json({ status: 200, categories: itemsArray });
}

function handleProductCategoriesID(req, res) {
  let categoryId = req.params.id.toLowerCase();
  let productCatArray = [];

  console.log(req.params.category);
  productsData.forEach((product) => {
    const category = product.category.toLowerCase();

    if (category === categoryId) {
      productCatArray.push(product);
    }
  });

  res.status(200).json({ status: 200, productsData: productCatArray });
} //there may be a catch error or 404 needed here in case someone messes up spelling

function handleSpecificBrand(req, res) {
  res.status(200).json("individual brands Go Here");
}

function handleSpecificProduct(req, res) {
  res.status(200).json("individual products Go Here");
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
