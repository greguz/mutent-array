export default class ArrayAdapter {
  constructor (items) {
    this.items = items || []
  }

  find (query) {
    return this.items.find(query)
  }

  filter (query) {
    return this.items.filter(query)
  }

  create (data) {
    this.items.push(data)
  }

  update (oldData, newData) {
    const index = this.items.findIndex(item => item === oldData)
    if (index < 0) {
      throw new Error('Cannot find the item to update')
    }
    this.items.splice(index, 1, newData)
  }

  delete (data) {
    const index = this.items.findIndex(item => item === data)
    if (index < 0) {
      throw new Error('Cannot find the item to delete')
    }
    this.items.splice(index, 1)
  }
}
