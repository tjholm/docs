# Collections

## Overview

Nitric Collections simplify storing data into easily accessible documents.

### Collections

A collection in a unique collection of unstructured data that is made up of many documents. Collections can most often be thought of as a category of related documents. E.g. `countries`

### Documents

A document is a uniquely identifiable item within a collection. It can be thought of as a simple `JSON` document. E.g. if `countries` was a collection then `usa` might be a document within that collection.

### Sub-collections

A sub-collection is a collection that belongs to a single document. If we use `usa` as a parent document example then `states` might be a sub-collection that holds states within that country.

### Create a collection

Declaring a collection for your application can be done in a single line of config-as-code using the nitric SDK:

```javascript
import { collection } from '@nitric/sdk';

const countries = collection('Countries').for('reading', 'writing', 'deleting');
```

### Writing a document

You can create a new document by simply using an existing collection reference to create a new document reference.

```javascript
await countries.doc('USA').set({
  name: 'United States of America',
  population: 329500000,
});
```

### Reading a document

Just like with writing, you can read a document by simply using it's reference.

```javascript
const doc = await countries.doc('USA').get();
```

### Deleting a document

To delete a file that has been previously written, you use the `delete()` method on the file reference.

```javascript
await profiles.doc('USA').delete();
```

### Querying a collection

Simple queries on collections are supported as well

```javascript
const query = countries
  .query()
  // query string prefixes
  .where('name', 'startsWith', 'United')
  // query on equality
  .where('name', '==', 'United States of America')
  // query on inequality
  .where('name', '!=', 'Canada')
  // query on gt, lt, gte and lte as well
  .where('population', '>=', 100000000);
```

Results can be iterated either by paging or streaming

```javascript
// Paging
const results = await query.fetch();
// Use the paging token in next query to fetch the next page
const token = results.pagingToken;

for (const doc of results.documents) {
  // Do something with your documents
  console.log(doc.id);
}

// Streaming
const stream = query.stream();

stream.on('data', (snapshot) => {
  // Get document snapshots
});
```

### Working with sub-collections

Working with sub-collections is very similar to working with a collection

```javascript
const states = countries.doc('USA').collection('States');
// Get a reference to a document on the sub collection
const stateOfColorado = states.doc('Colorado');
```

> Nitric supports a single depth of sub-collection

### Querying sub-collections

You can query same named sub-collections across documents in a collection.

> This sub-collection reference is only queryable, since it's really an aggregate of all `States` sub-collections across all `Countries` documents. i.e. Query every state in every country.

```javascript
const allStates = countries.collection('States');
const foundStates = allStates.query().stream();

foundStates.on('data', (doc) => {
  // do something...
});
```

## What's next?

<!-- TODO: ================= update link below with reference page ================= -->

- Learn more about collections and documents in our [reference docs]().
