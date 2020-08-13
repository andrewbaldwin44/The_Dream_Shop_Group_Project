const productsData = require("../data/items.json");
const brandsData = require("../data/companies.json");

const {
  findItem,
  paginateModel,
  getQueryValue,
  reduceStock,
} = require("../utils/utils");

const { updateUser } = require('./handleAuthentication');

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

  productsData.forEach((product) => {
    const category = product.category.toLowerCase();

    if (category === categoryId) {
      productCatArray.push(product);
    }
  });

  res.status(200).json({ status: 200, category: productCatArray });
}

function handleSpecificBrand(req, res) {
  let urlBrand = req.params.brand.toLowerCase();
  let companyId = "";
  let companyProducts = [];

  let searchId = brandsData.forEach((brand) => {
    const brandName = brand.name.toLowerCase();

    if (brandName === urlBrand) {
      companyId = brand.id;
    }
  });

  productsData.forEach((product) => {
    if (product.companyId === companyId) {
      companyProducts.push(product);
    }
  });

  res.status(200).json({ status: 200, products: companyProducts });
}

function handleSpecificProduct(req, res) {
  let productId = req.params.id;
  let product = findItem(productsData, productId);

  res.status(200).json({ status: 200, items: product });
}

async function handlePurchase(req, res) {
  const { purchasedItems, user } = req.body;

  let orderNumber = 1000;
  function newOrder() {
    return (orderNumber += 1);
  }

  try {
    purchasedItems.forEach((purchasedItem) => {
      const { productId, quantity } = purchasedItem;
      const product = findItem(productsData, productId);
      reduceStock(product, productId, quantity);
      newOrder();
      console.log(orderNumber);
    });

    const {
      personalinfo: { email }
    } = user;

    if (email) await updateUser(user, email);

    res.status(201).json({
      status: 201,
      purchasedItems: purchasedItems,
      message: "order placed",
      orderNo: orderNumber,
    });
  } catch (error) {
    res.status(401).json({ status: 401, message: error.message });
  }
}

function handleBodyLocation(req, res) {
  const bodyLocation = productsData.reduce((bodyLocation, product) => {
    const location = product.body_location;

    if (!bodyLocation.includes(location)) bodyLocation.push(location);
    return bodyLocation;
  }, []);

  res.status(200).json({ status: 200, bodyLocation });
}

module.exports = {
  handleBrands,
  handleProducts,
  handleCategories,
  handleProductCategoriesID,
  handleSpecificBrand,
  handleSpecificProduct,
  handlePurchase,
  handleBodyLocation,
};
