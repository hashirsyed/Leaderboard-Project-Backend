"use strict";
const {DataTypes} =require("sequelize")

const table = "users";


module.exports = {
  up: async function (queryInterface) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });

  },
  down: async function (queryInterface) {
    await queryInterface.dropTable(table);
  },
};
