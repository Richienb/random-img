# Random Img [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/random-img/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/random-img)

Get a random Unsplash image.

[![NPM Badge](https://nodei.co/npm/random-img.png)](https://npmjs.com/package/random-img)

## Install

```sh
npm install random-img
```

## Usage

```js
const randomImg = require(".");
const fs = require("fs").promises;

(async () => {
	const image = await randomImg();
	await fs.writeFile("file.jpg", Buffer.from(image));
})()
```

## API

### randomImg()
