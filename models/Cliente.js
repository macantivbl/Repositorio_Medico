const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const User = sequelize.define('Cliente', {
        idCliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Nombre: DataTypes.STRING,
        RFC: DataTypes.STRING,
        Puntos: DataTypes.INTEGER,
        
    })

    return Cliente

}

