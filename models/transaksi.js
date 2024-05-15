'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      class transaksi extends Model{
      static associate(models) {
        this.belongsTo(models.user, { foreignKey:'userID' });
        this.belongsTo(models.jasa, { foreignKey:'jasaID' });
      }
    }
    }
  }
  transaksi.init({
    transaksiID:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    userID: DataTypes.INTEGER,
    jasaID: DataTypes.INTEGER,
    payment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};