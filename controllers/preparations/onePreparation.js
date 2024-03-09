
const { HttpError } = require('../../helpers');
const { Preparations, Pharmacy } = require('../../models');


const onePreparation = async (req, res) => {
    const {ID} = req.params;

    const preparation = await Preparations.findById(ID);

    if(!preparation) throw HttpError(400);

	

		res.status(200).json({
			preparation,
		});

	
};

module.exports = onePreparation;
