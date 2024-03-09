const express = require('express');

const ctrl = require('../../controllers');

const router = express.Router();

const { schemas } = require('../../models/preparationsModel');
const { validBody, isValidTodayID, authenticate, isValidId } = require('../../middlewares');

router.post('/:ID', isValidId, validBody(schemas.addSchema), ctrl.addPreparation);
router.delete('/:ID', isValidId, ctrl.removePreparation);
// router.put('/:todayID', authenticate, validBody(schemas.addSchema), isValidTodayID, validBody(schemas.addSchema), ctrl.editWater);

router.get('/:ID', isValidId, ctrl.allPreparation);
router.get('/one/:ID', isValidId, ctrl.onePreparation)



module.exports = router;
