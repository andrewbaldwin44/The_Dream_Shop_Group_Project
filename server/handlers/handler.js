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

module.exports = {
  handleBrands,
  handleBacon,
  handleProducts,
};
