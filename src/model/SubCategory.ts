import { sequelize, DataTypes, Model } from "@ooic/core";
import { Category } from "./Category";
import { Product } from "./Product";
import { SubCategoryLocale } from "./SubCategoryLocale";

export class SubCategory extends Model {
  id: number;
  categoryId: number;
  color: string;
  title: string;
  order: number;
  /* type definitions */
}

SubCategory.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    /* field initialization */
  },
  {
    tableName: "subcategory",
    sequelize,
  }
);