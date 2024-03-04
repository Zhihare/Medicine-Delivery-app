
const { Pharmacy } = require('../../models');
const { validateID } = require('../../service/waterServices/uuidValid');


const removePharmacy = async (req, res) => {
	const { ID } = req.params;
	
        const result = await Pharmacy.findByIdAndDelete(ID);
    
        if (result) {
          res.json({ message: 'deleted' });
        } else {
          res.status(404).json({ message: 'Pharmacy not found' });
        }
    };


module.exports = removePharmacy;
