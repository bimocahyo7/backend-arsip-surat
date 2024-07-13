const { Surat, Kategori } = require("../models");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

class SuratController {
  static async createSurat(req, res) {
    const { nomorSurat, kategori, judul } = req.body;
    const fileDokumen = req.file;

    try {
      if (!kategori) {
        return res.status(400).json({ message: "Kategori harus disertakan!" });
      }
      const kategoriRecord = await Kategori.findOne({ where: { namaKategori: kategori } });
      if (!kategoriRecord) {
        return res.status(400).json({ message: "Kategori tidak ditemukan!" });
      }

      const newSurat = await Surat.create({
        nomorSurat,
        kategori,
        kategoriId: kategoriRecord.id,
        judul,
        fileDokumen: fileDokumen.filename, // Simpan nama file ke database
      });

      res.status(201).json({ message: "Surat berhasil ditambahkan!", data: newSurat.toJSON() });
    } catch (error) {
      console.error(`Error menambahkan surat! ${error}`);
      res.status(400).json({ message: error.message });
    }
  }

  static async downloadSurat(req, res) {
    const { id } = req.params;

    try {
      const surat = await Surat.findByPk(id);

      if (!surat) {
        return res.status(404).json({ message: "Surat tidak ditemukan!" });
      }

      const fileLocation = path.join(__dirname, "../uploads", surat.fileDokumen);
      res.download(fileLocation, surat.fileDokumen);
    } catch (error) {
      console.error(`Error mengunduh surat! ${error}`);
      res.status(500).json({ message: "Terjadi kesalahan saat mengunduh surat!" });
    }
  }

  static async getAllSurat(req, res) {
    try {
      const surats = await Surat.findAll({ attributes: { exclude: ["fileDokumen"] } });
      res.status(200).json(surats);
    } catch (error) {
      console.error(`Error mengambil data surat! ${error}`);
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data surat!" });
    }
  }

  static async getSuratDetailByID(req, res) {
    const { id } = req.params;
    try {
      const surat = await Surat.findByPk(id);
      if (!surat) {
        return res.status(404).json({ message: "Surat tidak ditemukan!" });
      }
      res.status(200).json(surat);
    } catch (error) {
      console.error(`Error mengambil detail surat! ${error}`);
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil detail surat!" });
    }
  }

  static async deleteSurat(req, res) {
    const { id } = req.params;
    try {
      const surat = await Surat.findByPk(id);
      if (!surat) {
        return res.status(404).json({ message: "Surat tidak ditemukan!" });
      }
      await surat.destroy();
      res.status(200).json({ message: "Surat berhasil dihapus!" });
    } catch (error) {
      console.error(`Error menghapus surat! ${error}`);
      res.status(500).json({ message: "Terjadi kesalahan saat menghapus surat!" });
    }
  }
}

module.exports = { SuratController, upload };
