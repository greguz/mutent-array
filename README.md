# mutent-array

Simple in memory adapter for [Mutent](https://github.com/greguz/mutent).

```javascript
import { Store } from 'mutent'
import ArrayAdapter from 'mutent-array'

const items = []

const store = new Store({
  adapter: new ArrayAdapter(items)
})

store.create({ value: 42 })
  .unwrap()
  .then(data => {
    console.log(`Creation result: ${data === items[0]}`)
  })
```
