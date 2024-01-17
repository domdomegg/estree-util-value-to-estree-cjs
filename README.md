# estree-util-value-to-estree-cjs

A wrapper of remcohaszing's brilliant [`estree-util-value-to-estree`](https://github.com/remcohaszing/estree-util-value-to-estree), packaged to be imported synchronously into CJS projects.

In most scenarios you should NOT use this package. Instead, consider:

- Using ESM, and importing [`estree-util-value-to-estree`](https://github.com/remcohaszing/estree-util-value-to-estree) directly
- Using [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import), and importing [`estree-util-value-to-estree`](https://github.com/remcohaszing/estree-util-value-to-estree) directly

## Usage

Use this where you'd otherwise use `estree-util-value-to-estree`, for example:

```js
const { valueToEstree } = require('estree-util-value-to-estree-cjs');

module.exports = valueToEstree({
  name: "Adam"
})
```

## Contributing

Pull requests are welcomed on GitHub! To get started:

1. Install Git and Node.js
2. Clone the repository
3. Install dependencies with `npm install`
4. Run `npm run test` to run tests
5. Build with `npm run build`

## Releases

Versions follow the versioning of `estree-util-value-to-estree`.

To release:

1. Use `npm version <version> --allow-same-version` to bump the version
2. Make sure `estree-util-value-to-estree`'s version matches (`npm test` will check this for you)
3. Run `git push --follow-tags` to push with tags
4. Wait for GitHub Actions to publish to the NPM registry.
