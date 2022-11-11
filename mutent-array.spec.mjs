import test from 'ava'

import { ArrayAdapter } from './mutent-array.mjs'

test('find', t => {
  const adapter = new ArrayAdapter({
    items: [{ my: 'object' }]
  })

  t.is(adapter.find(item => item.my === 'object'), adapter.items[0])
  t.is(adapter.find(() => false), undefined)

  t.deepEqual(adapter.items, [{ my: 'object' }])
})

test('filter', t => {
  const adapter = new ArrayAdapter({
    items: [
      { id: 0, name: 'Bonnie' },
      { id: 1, name: 'Clyde' }
    ]
  })

  t.deepEqual(adapter.filter(() => false), [])
  t.deepEqual(adapter.filter(item => item.id === 1), [
    { id: 1, name: 'Clyde' }
  ])
  t.deepEqual(adapter.filter(() => true), adapter.items)
})

test('create', t => {
  const adapter = new ArrayAdapter()

  adapter.create({ your: 'mom' })

  t.deepEqual(adapter.items, [{ your: 'mom' }])
  // That was slow!
})

test('update', t => {
  const adapter = new ArrayAdapter({
    items: [{ id: 0, name: 'phteven' }]
  })

  adapter.update(adapter.items[0], { id: 0, name: 'Steven' })

  t.deepEqual(adapter.items, [{ id: 0, name: 'Steven' }])

  t.throws(
    () => adapter.update({}, {}),
    { message: 'Cannot find the item to update' }
  )
})

test('delete', t => {
  const adapter = new ArrayAdapter({
    items: [{ name: 'Trimagasi' }]
  })

  t.throws(
    () => adapter.delete({}),
    { message: 'Cannot find the item to delete' }
  )

  // Bye Mr. Obviously
  adapter.delete(adapter.items[0])

  t.deepEqual(adapter.items, [])
})
