const KategoriController = require("../../controllers/kategoriController");
const router = require("express").Router();

router.post("/", KategoriController.CreateKategori);
router.get("/", KategoriController.GetKategori);
router.put("/:id", KategoriController.UpdateKategori);
router.delete("/:id", KategoriController.DeleteKategori);

module.exports = router;
