const { HttpError } = require('../../helpers');
const { Pharmacy } = require('../../models/pharmacyModel');

const allPharmacy = async (req, res) => {
    const result = await Pharmacy.find();
    
    if (result) {
      res.json({ 
        result });
    } else {
      res.status(404).json({ message: 'Pharmacy not found' });
    }
};

;

module.exports = allPharmacy;
