import { sequelize, DataTypes, Model } from "@ooic/core";

export class Slider extends Model {
  id: number;
  productId: number;
  image: string;
  /* type definitions */
}

Slider.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    /* field initialization */
  },
  {
    tableName: "slider",
    sequelize,
  }
);