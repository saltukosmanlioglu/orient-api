import { sequelize, DataTypes, Model } from "@ooic/core";

export class Category extends Model {
  id: number;
  color: string;
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
