const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Cliente
router.get('/', permission('admin'), async (req, res) => {
  const Cliente = await sequelize.models.Cliente.findAndCountAll();
  return res.status(200).json({ data: Cliente });
});


router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const order = await sequelize.models.Cliente.create({
    idCliente: body.idCliente,
    Nombre: body.Nombre,
    RFC: body.RFC,
    Puntos: body.Puntos,
  });
  await order.save();
  return res.status(201).json({ data: order });
});


router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const order = await sequelize.models.Cliente.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  const updatedOrder = await order.update({
    idCliente: body.idCliente,
    Nombre: body.Nombre,
    RFC: body.RFC,
    Puntos: body.Puntos,
  });
  return res.json({ data: updatedOrder });
});


router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const order = await sequelize.models.Cliente.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  await order.destroy();
  return res.json();
});

module.exports = router;