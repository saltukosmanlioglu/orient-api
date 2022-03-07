import { sequelize, DataTypes, Model } from "@ooic/core";

export class Language extends Model {
  id: number;
  language: string;
  /* type definitions */
}

Language.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /* field initialization */
  },
  {
    tableName: "language",
    sequelize,
  }
);
