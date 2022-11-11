export class ArrayAdapter {
  constructor (options = {}) {
    this.ignoreMissingItems = !!options.ignoreMissingItems
    this.items = options.items || []
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
    if (index >= 0) {
      this.items.splice(index, 1, newData)
    } else if (!this.ignoreMissingItems) {
      throw new Error('Cannot find the item to update')
    }
  }

  delete (data) {
    const index = this.items.findIndex(item => item === data)
    if (index >= 0) {
      this.items.splice(index, 1)
    } else if (!this.ignoreMissingItems) {
      throw new Error('Cannot find the item to delete')
    }
  }
}
