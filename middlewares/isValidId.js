const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../helpers');

exports.isValidId = (req, res, next) => {
	const { ID } = req.params;
	console.log(ID);
	if (!isValidObjectId(ID)) {
		next(HttpError(404, `${ID} is not a valid id`));
	}
	next();
};

exports.isValidTodayID = (req, res, next) => {
	const { todayID } = req.params;
	if (!isValidObjectId(todayID)) {
		next(HttpError(404, `${todayID} is not a valid id`));
	}
	next();
};


