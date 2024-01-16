/* eslint-disable import/no-extraneous-dependencies */
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const copy = require('rollup-plugin-copy');

module.exports = {
  input: ['src/index.mjs'],
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    copy({
      targets: [{ src: 'src/index.d.ts', dest: 'dist' }],
    }),
  ],
};
