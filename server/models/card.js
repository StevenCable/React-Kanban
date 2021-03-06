'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cards = sequelize.define('Card', {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    assignTo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cards;
};