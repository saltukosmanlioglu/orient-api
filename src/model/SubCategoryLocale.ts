import { Language } from "@/enum";
import { sequelize, DataTypes, Model } from "@ooic/core";

export class SubCategoryLocale extends Model {
  id: number;
  subCategoryId: number;
  locale: Language
  title: string
  /* type definitions */
}

SubCategoryLocale.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    locale: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    /* field initialization */
  },
  {
    tableName: "subCategoryLocale",
    sequelize,
  }
);
