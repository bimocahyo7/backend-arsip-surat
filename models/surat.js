"use strict";
const { Model } = require("sequelize");
const kategori = require("./kategori");
module.exports = (sequelize, DataTypes) => {
  class Surat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Surat.belongsTo(models.Kategori, { foreignKey: "kategoriId", onDelete: "CASCADE", onUpdate: "CASCADE" });
    }
  }
  Surat.init(
    {
      nomorSurat: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len: [5, 35],
        },
      },
      kategori: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      judul: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len: [5, 100],
        },
      },
      fileDokumen: {
        type: DataTypes.BLOB,
        validate: {
          allowNull: false,
        },
      },
    },
    {
      sequelize,
      modelName: "Surat",
    }
  );
  return Surat;
};
