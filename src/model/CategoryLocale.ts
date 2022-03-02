import { Language } from "@/enum";
import { sequelize, DataTypes, Model } from "@ooic/core";

export class CategoryLocale extends Model {
  id: number;
  categoryId: number;
  locale: Language
  title: string
  /* type definitions */
}

CategoryLocale.init(
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
    tableName: "categorylocale",
    sequelize,
  }
);
