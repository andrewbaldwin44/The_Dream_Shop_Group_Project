function findItem(items, id) {
  return items.find(item => item.id === Number(id));
}

module.exports = {
  findItem,
}
