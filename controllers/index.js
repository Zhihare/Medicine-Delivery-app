const { ctrlWrapper } = require('../helpers');


const addPharmacy = require('./pharmacy/addPharmacy');
const removePharmacy = require('./pharmacy/removePharmacy');
const allPharmacy = require('./pharmacy/allPharmacy');

const addPreparation = require('./preparations/addPreparation');
const editPreparation = require('./preparations/editPreparation');
const removePreparation = require('./preparations/removePreparation');
const allPreparation = require('./preparations/allPreparation');

const addOrder = require('./order/addOrder');
const getAllOrder = require('./order/getAllOrder');

const onePreparation = require('./preparations/onePreparation');


module.exports = {


	addPharmacy: ctrlWrapper(addPharmacy),
	removePharmacy: ctrlWrapper(removePharmacy),
	allPharmacy: ctrlWrapper(allPharmacy),

	addPreparation: ctrlWrapper(addPreparation),
	editPreparation: ctrlWrapper(editPreparation),
	removePreparation: ctrlWrapper(removePreparation),
	allPreparation: ctrlWrapper(allPreparation),
	onePreparation: ctrlWrapper(onePreparation),

	addOrder: ctrlWrapper(addOrder),
	getAllOrder: ctrlWrapper(getAllOrder),
};
