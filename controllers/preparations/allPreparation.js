
const { HttpError } = require('../../helpers');
const { Preparations, Pharmacy } = require('../../models');


const allPreparation = async (req, res) => {
    const {ID} = req.params;

    const pharmacy = await Pharmacy.findById(ID);
    console.log(pharmacy);
    if(!pharmacy) throw HttpError(400);

	const preparation = await Preparations.find({owner: ID });
console.log(preparation);
	if (!preparation) throw new HttpError(404);
	

		res.status(200).json({
			preparation,
		});

	
};

module.exports = allPreparation;
