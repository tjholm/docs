Create a reference to a file on a bucket

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');
```

## Parameters

---

**name** required `string`

The unique name/reference to the file.

---

## Notes:

The file does not need to exist, only a reference to that file is being created.

## Available Operations

 - [file.get()](./file-get.md)
 - [file.put()](./file-put.md)
 - [file.delete()](./file-delete.md)
