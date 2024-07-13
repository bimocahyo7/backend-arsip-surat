const router = require("express").Router();
const kategoriRouter = require("./kategori");
const suratRouter = require("./surat");

router.use("/kategori", kategoriRouter);
router.use("/surat", suratRouter);

module.exports = router;
