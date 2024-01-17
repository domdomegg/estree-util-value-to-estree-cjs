const packageJson = require('./package.json');

// Check that these are in sync, because what rollup is effectively doing is copying the stuff across.
// To reduce confusion, we want to use the same version numbers.
if (packageJson.version !== packageJson.devDependencies['estree-util-value-to-estree']) {
  throw new Error('package.json version is not aligned with estree-util-value-to-estree version!');
}
