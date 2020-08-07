"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleBacon,
  handleBrands,
  handleProducts,
  handleProductCategories,
  handleSpecificBrands,
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

  .get("/bacon", handleBacon)
  //Lucas Created this Friday
  .get("/brands", handleBrands)
  .get("/products", handleProducts)
  .get("/products/categories/:category", handleProductCategories)
  .get("/products/brands/:brandId", handleSpecificBrands)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
