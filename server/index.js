"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleBrands,
  handleProducts,
  handleProductCategoriesID,
  handleSpecificBrand,
  handleCategories,
  handleSpecificProduct,
  modifyInventory,
  handleBodyLocation,
} = require("./handlers/handler");

const PORT = 4000;

const app = express();

app
.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
})

.use(morgan("tiny"))
.use(express.static("./server/assets"))
.use(bodyParser.json())
.use(express.urlencoded({ extended: false }))
.use("/", express.static(__dirname + "/"))

.put("/inventory", modifyInventory)

.get("/brands", handleBrands)
.get("/products", handleProducts)
.get("/products/product/:id", handleSpecificProduct)
.get("/products/categories", handleCategories)

.get("/products/categories/:id", handleProductCategoriesID) //all products in a given cat go here
.get("/brands/:brand", handleSpecificBrand)
.get("/bodylocation", handleBodyLocation)
.listen(PORT, () => console.info(`Listening on port ${PORT}`));
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
  })

  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // .get("/bacon", handleBacon)
  .put("/inventory", modifyInventory)

  .get("/brands", handleBrands)
  .get("/products", handleProducts)
  .get("/products/product/:id", handleSpecificProduct)
  .get("/products/categories", handleCategories)

  .get("/products/categories/:id", handleProductCategoriesID) //all products in a given cat go here
  .get("/brands/:brand", handleSpecificBrand) //returns all products by brand
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
<<<<<<< HEAD
>>>>>>> products by category
<<<<<<< HEAD
>>>>>>> 88cc822... products by brand
=======
=======
>>>>>>> more cleanup...
>>>>>>> 1cb18e4... more cleanup...
>>>>>>> 4472521... rough draft of product page
