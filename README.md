# mutent-array

Simple array adapter for mutent

```javascript
import { createStore } from 'mutent'
import { createArrayAdapter } from 'mutent-array'

const database = []

const store = createStore({
  name: 'MyMemoryStore',
  adapter: createArrayAdapter(database)
})
```
