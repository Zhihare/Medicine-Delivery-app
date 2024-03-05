
const { Pharmacy } = require('../../models');
const { v4: uuidv4 } = require('uuid');
const { newDate } = require('../../service/orderServices/newDate');

const addPharmacy = async (req, res) => {
	const {name, adress, logo} = req.body;

	
	const newPharm = await Pharmacy.create({name, adress, logo});

		res.status(201).json({
			status: "success",
			name,
			adress,
		});

	
};

module.exports = addPharmacy;
