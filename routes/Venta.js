const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// MaterialMedico
router.get('/', permission('admin'), async (req, res) => {
  const MaterialMedico = await sequelize.models.MaterialMedico.findAndCountAll();
  return res.status(200).json({ data: MaterialMedico });
});


router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const order = await sequelize.models.MaterialMedico.create({
    idVenta: body.idVenta,
    FechaCompra: body.FechaCompra,
    NombreProd: body.NombreProd,
  });
  await order.save();
  return res.status(201).json({ data: order });
});


router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const order = await sequelize.models.MaterialMedico.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  const updatedOrder = await order.update({
    idVenta: body.idVenta,
    FechaCompra: body.FechaCompra,
    NombreProd: body.NombreProd,
  });
  return res.json({ data: updatedOrder });
});


router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const order = await sequelize.models.MaterialMedico.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  await order.destroy();
  return res.json();
});

module.exports = router;