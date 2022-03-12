import { sequelize, DataTypes, Model } from "@ooic/core";
import { Category } from "./Category";
import { Product } from "./Product";
import { SubCategoryLocale } from "./SubCategoryLocale";

export class SubCategory extends Model {
  id: number;
  categoryId: number;
  color: string;
  title: string;
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
      type: DataTypes.NUMBER,
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
    /* field initialization */
  },
  {
    tableName: "subcategory",
    sequelize,
  }
);

SubCategory.hasMany(Product, {
  as: "products",
  foreignKey: "subCategoryId",
  constraints: false,
});

SubCategory.hasMany(SubCategoryLocale, {
  as: "locales",
  foreignKey: "subCategoryId",
});
