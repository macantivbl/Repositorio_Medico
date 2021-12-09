const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const User = sequelize.define('Cliente', {
        idMaterialMedico: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        NombreProd: DataTypes.STRING,
        Precio: DataTypes.DOUBLE,
    })

    return Cliente

}
