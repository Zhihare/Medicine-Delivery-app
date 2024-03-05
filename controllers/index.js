const { ctrlWrapper } = require('../helpers');

const register = require('./auth/register');
const verifyEmail = require('./auth/verifyEmail');
const resendVerifyEmail = require('./auth/resendVerifyEmail');
const login = require('./auth/login');
const logout = require('./auth/logout');
const current = require('./auth/current');
const updateUser = require('./auth/updateUser');
const deleteUser = require('./auth/deleteUser');

// !!!
const getDailyNorma = require('./auth/getDailyNorma');
const updateDailyNorma = require('./auth/updateDailyNorma');
const updateAvatar = require('./auth/updateAvatar');

const addWater = require('./water/addWater');
const editWater = require('./water/editWater');
const removeWater = require('./water/removeWater');
const today = require('./water/today');
const month = require('./water/month');

const addPharmacy = require('./pharmacy/addPharmacy');
const removePharmacy = require('./pharmacy/removePharmacy');
const allPharmacy = require('./pharmacy/allPharmacy');

const addPreparation = require('./preparations/addPreparation');
const editPreparation = require('./preparations/editPreparation');
const removePreparation = require('./preparations/removePreparation');
const allPreparation = require('./preparations/allPreparation');

module.exports = {
	register: ctrlWrapper(register),
	verifyEmail: ctrlWrapper(verifyEmail),
	resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
	login: ctrlWrapper(login),
	logout: ctrlWrapper(logout),
	current: ctrlWrapper(current),
	updateUser: ctrlWrapper(updateUser),
	deleteUser: ctrlWrapper(deleteUser),

	// !!!
	getDailyNorma: ctrlWrapper(getDailyNorma),
	updateDailyNorma: ctrlWrapper(updateDailyNorma),
	updateAvatar: ctrlWrapper(updateAvatar),

	addWater: ctrlWrapper(addWater),
	editWater: ctrlWrapper(editWater),
	removeWater: ctrlWrapper(removeWater),
	today: ctrlWrapper(today),
	month: ctrlWrapper(month),

	addPharmacy: ctrlWrapper(addPharmacy),
	removePharmacy: ctrlWrapper(removePharmacy),
	allPharmacy: ctrlWrapper(allPharmacy),

	addPreparation: ctrlWrapper(addPreparation),
	editPreparation: ctrlWrapper(editPreparation),
	removePreparation: ctrlWrapper(removePreparation),
	allPreparation: ctrlWrapper(allPreparation),
};
