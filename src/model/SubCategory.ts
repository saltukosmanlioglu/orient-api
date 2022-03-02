import { sequelize, DataTypes, Model } from "@ooic/core";
import { Category } from "./Category";
import { Product } from "./Product";

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
    color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
    /* field initialization */
  },
  {
    tableName: "subcategory",
    sequelize,
  }
);

SubCategory.hasMany(Product, {
  as: "products",
  foreignKey: "subCategoryId"
})