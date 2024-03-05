
const { HttpError } = require('../../helpers');
const { Preparations, Pharmacy } = require('../../models');


const aditPreparation = async (req, res) => {
	const {idPreparation} = req.query;
    const {ID} = req.params;

    const pharmacy = await Pharmacy.findById(ID);
    if(!pharmacy) throw HttpError(400);

	const preparationDeleted = await Preparations.findOneAndDelete({ _id: idPreparation, owner: ID });

	if (!preparationDeleted) throw new HttpError(404);
	

		res.status(200).json({
			status: "deleted",
		});

};

module.exports = aditPreparation;
