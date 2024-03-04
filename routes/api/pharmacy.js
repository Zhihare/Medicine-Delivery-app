const express = require('express');

const ctrl = require('../../controllers');

const router = express.Router();

const { schemas } = require('../../models/pharmacyModel');
const { validBody, isValidTodayID, authenticate, isValidId } = require('../../middlewares');

router.post('/', validBody(schemas.addSchema), ctrl.addPharmacy);
router.delete('/:ID', isValidId, ctrl.removePharmacy);
// router.put('/:todayID', authenticate, validBody(schemas.addSchema), isValidTodayID, validBody(schemas.addSchema), ctrl.editWater);

router.get('/all', ctrl.allPharmacy);
// router.get('/month', authenticate, ctrl.month);


module.exports = router;
