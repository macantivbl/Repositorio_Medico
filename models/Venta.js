const { DataTypes } = require('sequelize')

module.exports = (sequelize) => sequelize.define( 'reviews' , {
    idVenta: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    FechaCompra: DataTypes.DATE,
    ClienteID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cliente',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      MaterialMedicoID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MaterialMedico',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      Vendedor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vendedor',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });

