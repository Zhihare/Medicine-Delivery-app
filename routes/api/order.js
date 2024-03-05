const express = require('express');

const ctrl = require('../../controllers');

const router = express.Router();

const { schemas } = require('../../models/orderModel');
const { validBody, isValidTodayID, authenticate } = require('../../middlewares');

router.post('/',validBody(schemas.addSchema),   ctrl.addOrder);
// router.delete('/:todayID', authenticate, isValidTodayID, ctrl.removeWater);
// router.put('/:todayID', authenticate, validBody(schemas.addSchema), isValidTodayID, validBody(schemas.addSchema), ctrl.editWater);

router.get('/', validBody(schemas.getOrdersSchema), ctrl.getAllOrder);
// router.get('/month', authenticate, ctrl.month);


module.exports = router;
