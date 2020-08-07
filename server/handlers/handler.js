function handleBacon(req, res) {
  res.status(200).json("🥓");
}

//Lucas created these Friday
function handleBrands(req, res) {
  res.status(200).json("Brands Go Here");
}
function handleProducts(req, res) {
  res.status(200).json("Products Go Here");
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
module.exports = {
  handleBrands,
  handleBacon,
  handleProducts,
  handleCategories,
  handleProductCategoriesID,
  handleSpecificBrands,
  handleSpecificProduct,
};
