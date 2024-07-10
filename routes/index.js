const router = require("express").Router();
const kategoriRouter = require("./kategori");

router.use("/kategori", kategoriRouter);

module.exports = router;
