"use strict"

const ky = require("ky-universal")

module.exports = async () => {
	const response = await ky("https://source.unsplash.com/random")
	const image = await response.arrayBuffer()
	return image
}
