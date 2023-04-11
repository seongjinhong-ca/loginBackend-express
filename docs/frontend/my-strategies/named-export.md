when the file has export default,

```js
export default ComponentName;
```

import the file without curly bracket

```js
import ComponentName from "./ComponentNameFile";
```

when the file has only export right after the function name or variable name: named function or named variable

```js
export const NamedComponentName = () => {};
```

import the file with curly bracket ({})

```js
import { NamedComponentName } from "./NamedComponentNameFile";
```
