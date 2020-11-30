const test = require('ava')

const { createArrayAdapter } = require('./mutent-array')

test('find', t => {
  const items = [{ my: 'object' }]

  const adapter = createArrayAdapter(items)

  t.is(adapter.find(item => item.my === 'object'), items[0])
  t.is(adapter.find(() => false), undefined)

  t.deepEqual(items, [{ my: 'object' }])
})

test('filter', t => {
  const items = []

  const adapter = createArrayAdapter(items)

  t.pass()
})

test('create', t => {
  const items = []

  const adapter = createArrayAdapter(items)

  t.pass()
})

test('update', t => {
  const items = []

  const adapter = createArrayAdapter(items)

  t.pass()
})

test('delete', t => {
  const items = []

  const adapter = createArrayAdapter(items)

  t.pass()
})
