function findItem(items, id) {
  return items.find(item => item.id === Number(id));
}

function paginateModel(page, limit, model) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return model.slice(startIndex, endIndex);
}

function getQueryValue(queryValue, defaultValue) {
  return queryValue !== undefined ? Number(queryValue) : defaultValue;
}

module.exports = {
  findItem,
  paginateModel,
  getQueryValue,
}
