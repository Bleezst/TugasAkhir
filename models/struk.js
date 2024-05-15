'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class struk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.struk,{
        foreignKey: "strukID", as: "struk"
      })
    }
  }
  struk.init({
    strukID:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    transaksiID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'struk',
  });
  return struk;
};