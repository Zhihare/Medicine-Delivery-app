
const { HttpError } = require('../../helpers');
const { Preparations, Pharmacy } = require('../../models');


const addPreparation = async (req, res) => {
	const {name, price, quantity, photo, deteils} = req.body;
    const {ID} = req.params;

    const pharmacy = await Pharmacy.findById(ID);
    console.log(pharmacy);
    if(!pharmacy) throw HttpError(400);

	
	const newPreparation = await Preparations.create({name, price, quantity, photo, deteils,  owner: pharmacy._id});

		res.status(201).json({
			status: "success",
			newPreparation,
		});

	
};

module.exports = addPreparation;
