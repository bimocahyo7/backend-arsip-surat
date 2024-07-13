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
      },
      {
        namaKategori: "Undangan",
        keterangan: "Undangan rapat, koordinasi, dan sebagainya",
      },
      {
        namaKategori: "Nota Dinas",
        keterangan: "Dokumen internal untuk koordinasi dan informasi resmi",
      },
      {
        namaKategori: "Pemberitahuan",
        keterangan: "Surat yang bersifat pemberitahuan",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kategoris", null, {});
  },
};
