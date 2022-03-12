import { sequelize, DataTypes, Model } from "@ooic/core";
import { CategoryLocale } from "./CategoryLocale";
import { Product } from "./Product";
import { SubCategory } from "./SubCategory";

export class Category extends Model {
  id: number;
  color: string;
  locales: Array<CategoryLocale>;
  order: number;
  title: string;
  /* type definitions */
}

Category.init(
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
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    /* field initialization */
  },
  {
    tableName: "category",
    sequelize,
  }
);

Category.hasMany(SubCategory, {
  as: "subCategories",
  foreignKey: "categoryId",
});

Category.hasMany(Product, {
  as: "products",
  foreignKey: "categoryId",
  constraints: false,
});

Category.hasMany(CategoryLocale, {
  as: "locales",
  foreignKey: "categoryId",
});

SubCategory.belongsTo(Category, {
  as: "category",
  foreignKey: "categoryId",
});
