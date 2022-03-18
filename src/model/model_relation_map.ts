import { Category } from "./Category";
import { CategoryLocale } from "./CategoryLocale";
import { Login } from "./Login";
import { Product } from "./Product";
import { ProductLocale } from "./ProductLocale";
import { Slider } from "./Slider";
import { SubCategory } from "./SubCategory";
import { SubCategoryLocale } from "./SubCategoryLocale";
import { User } from "./User";

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

Product.hasMany(ProductLocale, {
  as: "locales",
  foreignKey: "productId",
});

SubCategory.hasMany(Product, {
  as: "products",
  foreignKey: "subCategoryId",
  constraints: false,
});

SubCategory.hasMany(SubCategoryLocale, {
  as: "locales",
  foreignKey: "subCategoryId",
});

SubCategory.belongsTo(Category, {
  as: "category",
  foreignKey: "categoryId",
});

Product.belongsTo(Category, {
  as: "category",
  foreignKey: "categoryId",
});

Login.belongsTo(User, { foreignKey: "userId" });

Slider.belongsTo(Product, {
  as: "product",
  foreignKey: "productId",
});

Product.belongsTo(Category, {
  as: "category",
  foreignKey: "categoryId",
});

Product.belongsTo(SubCategory, {
  as: "subCategory",
  foreignKey: "subCategoryId",
});
