const express = require("express");
const router = express.Router();
const { SuratController, upload } = require("../../controllers/suratController");

router.post("/", upload.single("fileDokumen"), SuratController.createSurat);
router.get("/", SuratController.getAllSurat);
router.get("/:id", SuratController.getSuratDetailByID);
router.delete("/:id", SuratController.deleteSurat);

// Update Surat
router.put("/:id", upload.single("fileDokumen"), SuratController.updateSurat);
// Download File
router.get("/download/:id", SuratController.downloadSurat);

module.exports = router;
