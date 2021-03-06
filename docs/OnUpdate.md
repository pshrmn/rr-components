# OnUpdate [\<\>](https://github.com/pshrmn/rrc/blob/master/src/OnUpdate.js#L3 "Source code")

The `<OnUpdate>` component will be called whenever the location changes.

### Usage

#### `call`

A function to be called whenever the location changes. The function will be passed the new location object.

```js
import { OnUpdate } from 'rrc'

<OnUpdate
  call={(location) => {
    analyticsTool.log(location.pathname)
  }} />
```

#### `immediate`

A [boolean attribute](http://stackoverflow.com/a/37829171/444829), if `true`, the `call` prop will be called when the `<OnUpdate>` component mounts.

```js
<OnUpdate
  immediate
  call={(location) => {
    analyticsTool.log(location.pathname)
  }} />
```
