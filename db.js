const {Sequelize} = require('sequelize');

const MaterialMedico = require('./models/MaterialMedico');
const Venta = require('./models/Venta.js');
const Cliente = require('./models/Cliente');

const sequelize = new Sequelize('ecomerce_api', 'root', 'root',{
    host:'localhost',
    dialect:'mariadb',
    logging:false
})

const models =[
    MaterialMedico,
    Venta,
    Cliente
]

for (let  of models) {
    model(sequelize)
}

const {MaterialMedico,Venta} = sequelize.models
MaterialMedico.belongsTo(Venta)
Cliente.belongsTo(Venta)

module.exports = sequelize;