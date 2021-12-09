const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Cliente
router.get('/', permission('admin'), async (req, res) => {
  const Cliente = await sequelize.models.Vendedor.findAndCountAll();
  return res.status(200).json({ data: Vendedor });
});

// Creating a new order
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const order = await sequelize.models.Vendedor.create({
    idVendedor: body.idVendedor,
    Nombre: body.Nombre,
    Contrasenia: body.Contrasenia,

  });
  await order.save();
  return res.status(201).json({ data: order });
});

// Update a order by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const order = await sequelize.models.Vendedor.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  const updatedOrder = await order.update({
    idVendedor: body.idVendedor,
    Nombre: body.Nombre,
    Contrasenia: body.Contrasenia,
  });
  return res.json({ data: updatedOrder });
});

// Delete a order by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const order = await sequelize.models.Vendedor.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  await order.destroy();
  return res.json();
});

module.exports = router;

