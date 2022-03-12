import { sequelize, DataTypes, Model } from "@ooic/core";
import { Product } from "./Product";

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
    productId: {
      type: DataTypes.NUMBER,
      allowNull: false,
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

Slider.belongsTo(Product, {
  foreignKey: "productId"
})