import test from 'ava'

import ArrayAdapter from './mutent-array.mjs'

test('find', t => {
  const items = [{ my: 'object' }]

  const adapter = new ArrayAdapter(items)

  t.is(adapter.find(item => item.my === 'object'), items[0])
  t.is(adapter.find(() => false), undefined)

  t.deepEqual(items, [{ my: 'object' }])
})

test('filter', t => {
  const items = [
    { id: 0, name: 'Bonnie' },
    { id: 1, name: 'Clyde' }
  ]

  const adapter = new ArrayAdapter(items)

  t.deepEqual(adapter.filter(() => false), [])
  t.deepEqual(adapter.filter(item => item.id === 1), [
    { id: 1, name: 'Clyde' }
  ])
  t.deepEqual(adapter.filter(() => true), items)
})

test('create', t => {
  const adapter = new ArrayAdapter()

  adapter.create({ your: 'mom' })

  t.deepEqual(adapter.items, [{ your: 'mom' }])
  // That was slow!
})

test('update', t => {
  const items = [{ id: 0, name: 'phteven' }]

  const adapter = new ArrayAdapter(items)

  adapter.update(items[0], { id: 0, name: 'Steven' })

  t.deepEqual(items, [{ id: 0, name: 'Steven' }])

  t.throws(
    () => adapter.update({}, {}),
    { message: 'Cannot find the item to update' }
  )
})

test('delete', t => {
  const items = [{ name: 'Trimagasi' }]

  const adapter = new ArrayAdapter(items)

  t.throws(
    () => adapter.delete({}),
    { message: 'Cannot find the item to delete' }
  )

  // Bye Mr. Obviously
  adapter.delete(items[0])

  t.deepEqual(items, [])
})
