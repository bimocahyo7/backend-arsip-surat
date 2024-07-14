"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    return queryInterface.bulkInsert("Kategoris", [
      {
        namaKategori: "Pengumuman",
        keterangan: "Surat-surat yang terkait dengan pengumuman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaKategori: "Undangan",
        keterangan: "Undangan rapat, koordinasi, dan sebagainya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaKategori: "Nota Dinas",
        keterangan: "Dokumen internal untuk koordinasi dan informasi resmi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaKategori: "Pemberitahuan",
        keterangan: "Surat yang bersifat pemberitahuan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kategoris", null, {});
  },
};
