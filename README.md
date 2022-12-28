Ethers.js nodes collection for Browser/Node.js

[![NPM](https://img.shields.io/npm/v/@blackprint/nodes-ethers.svg)](https://www.npmjs.com/package/@blackprint/nodes-ethers)
[![Build Status](https://github.com/Blackprint/nodes-ethers/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/Blackprint/nodes-ethers/actions/workflows/build.yml)

## Import this nodes from URL
Please specify the version to avoid breaking changes.

```js
Blackprint.loadModuleFromURL([
	'https://cdn.jsdelivr.net/npm/@blackprint/nodes-ethers@0.0.1/dist/nodes-ethers.mjs'
], {
	// Turn this on if you want to load .sf.js, and .sf.css
	// only with single .mjs
	loadBrowserInterface: true // set to "false" for Node.js/Deno
});
```

## Development URL
You can use this link to load unpublished nodes and still under development on GitHub.
https://cdn.jsdelivr.net/gh/Blackprint/nodes-ethers@dist/nodes-ethers.mjs

Replace `dist` with your latest commit hash (from `dist` branch) to avoid cache from CDN.

### License
MIT