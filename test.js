const test = require("ava")
const isArrayBuffer = require("is-array-buffer")
const fileType = require("file-type")
const randomImg = require(".")

test("main", async (t) => {
	const image = await randomImg()

	t.true(isArrayBuffer(image))
	t.deepEqual(await fileType.fromBuffer(Buffer.from(image)), { ext: "jpg", mime: "image/jpeg" })
})
