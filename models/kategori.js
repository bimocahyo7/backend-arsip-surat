"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kategori.hasMany(models.Surat, { foreignKey: "kategoriId", onDelete: "CASCADE", onUpdate: "CASCADE" });
    }
  }
  Kategori.init(
    {
      namaKategori: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len: [5, 20],
        },
      },
      keterangan: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len: [5, 100],
        },
      },
    },
    {
      sequelize,
      modelName: "Kategori",
    }
  );
  return Kategori;
};
