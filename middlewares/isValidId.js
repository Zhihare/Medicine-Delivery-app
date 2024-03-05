const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../helpers');

exports.isValidId = (req, res, next) => {
	const { ID } = req.params;
	
	if (!isValidObjectId(ID)) {
		next(HttpError(404, `${ID} is not a valid id`));
	}
	next();
};



