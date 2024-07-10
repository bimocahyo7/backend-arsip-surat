const { Kategori } = require("../models");

class Controller {
  static async CreateKategori(req, res) {
    const body = req.body;
    const { namaKategori, keterangan } = body;

    try {
      const newCategory = await Kategori.create({
        namaKategori,
        keterangan,
      });

      res.status(201).json({ message: "Kategori berhasil ditambahkan!", data: newCategory });
    } catch (error) {
      console.log(`Error menambahkan kategori! ${error}`);
      res.status(500).json(error);
    }
  }

  static async GetKategori(req, res) {
    try {
      const dataCategory = await Kategori.findAll();
      res.status(200).json(dataCategory);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Tidak dapat menemukan kategori!" });
    }
  }

  static async UpdateKategori(req, res) {
    const kategoriID = Number(req.params.id);
    const body = req.body;
    const { namaKategori, keterangan } = body;

    try {
      const editedCategory = await Kategori.update(
        { namaKategori, keterangan },
        {
          where: {
            id: kategoriID,
          },
        }
      );
      res.status(200).json({ message: "Kategori berhasil diedit!" });
    } catch (error) {
      res.status(500).json({ message: "Kategori gagal diedit!" });
      console.log(error);
    }
  }

  static async DeleteKategori(req, res) {
    const kategoriID = Number(req.params.id);

    try {
      const removedCategory = await Kategori.destroy({
        where: {
          id: kategoriID,
        },
      });

      if (removedCategory) {
        res.status(200).json({ message: `Kategori berhasil dihapus! ID: ${kategoriID}` });
      } else {
        res.status(404).json({ message: "Kategori ID tidak ditemukan!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Kategori gagal dihapus!" });
      console.log(error);
    }
  }
}

module.exports = Controller;
