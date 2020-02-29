/**
 * Get a random Unsplash image.
 * @example
 * ```
 * const randomImg = require(".");
 * const fs = require("fs").promises;
 *
 * (async () => {
 * 	const image = await randomImg();
 * 	await fs.writeFile("file.jpg", Buffer.from(image));
 * })()
 * ```
*/
declare async function randomImg(): Promise<ArrayBuffer>

export = randomImg
