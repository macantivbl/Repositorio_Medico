const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Vendedor = sequelize.define('users', {
    idVendedor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nombre: DataTypes.STRING,
    Contrasenia: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.Contrasenia = bcrypt.hashSync(user.Contrasenia, salt);
      },
    },
  });
  
    User.prototype.validPassword = function(Contrasenia) {
    return bcrypt.compareSync(Contrasenia, this.Contrasenia);
  };

  return Vendedor;
};

