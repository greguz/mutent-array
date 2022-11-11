# mutent-array

[![npm](https://img.shields.io/npm/v/mutent-array)](https://www.npmjs.com/package/mutent-array)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![ci](https://github.com/greguz/mutent-array/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/greguz/mutent-array/actions/workflows/ci.yaml)
[![Coverage Status](https://coveralls.io/repos/github/greguz/mutent-array/badge.svg?branch=master)](https://coveralls.io/github/greguz/mutent-array?branch=master)

Simple in memory adapter for [Mutent](https://github.com/greguz/mutent).

```javascript
import { Store } from 'mutent'
import { ArrayAdapter } from 'mutent-array'

const store = new Store({
  adapter: new ArrayAdapter()
})

store.create({ value: 42 })
  .unwrap()
  .then(data => {
    console.log(`Creation result: ${data === store.adapter.items[0]}`) // true
  })
```
