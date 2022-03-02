import { sequelize, DataTypes, Model } from "@ooic/core";

export class Product extends Model {
  id: number;
  allergens: string;
  description: string;
  image: string;
  name: string;
  price: number;
  /* type definitions */
}

Product.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    allergens: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    /* field initialization */
  },
  {
    tableName: "product",
    sequelize,
  }
);
