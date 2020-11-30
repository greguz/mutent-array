function readIndex (items, target) {
  const index = items.findIndex(item => item === target)
  if (index < 0) {
    throw new Error('Target item not found')
  }
  return index
}

exports.createArrayAdapter = function createArrayAdapter (items = []) {
  return {
    find (predicate) {
      return items.find(predicate)
    },
    filter (predicate) {
      return items.filter(predicate)
    },
    create (data) {
      items.push(data)
    },
    update (oldData, newData) {
      items.splice(readIndex(items, oldData), 1, newData)
    },
    delete (data) {
      items.splice(readIndex(items, data), 1)
    }
  }
}
