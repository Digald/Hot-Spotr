const bcrypt = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      localemail: DataTypes.STRING,
      localpassword: DataTypes.STRING
    },
    {
      classMethods: {
        generateHash: function(password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: function(password) {
          return bcrypt.compareSync(password, this.localpassword);
        },
        getterMethods: {
          someValue: function() {
            return this.someValue;
          }
        },
        setterMethods: {
          someValue: function(value) {
            this.someValue = value;
          }
        }
      }
    }
  );
  return User;
};
