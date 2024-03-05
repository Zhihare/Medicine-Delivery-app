const { model, Schema } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const pharmacySchema = new Schema(
	{
		name: {
			type: String,
		},
		adress: {
			type: String,
		},
		logo:{
			type: String,
		}
	},

	{ versionKey: false, timestamps: true }
);

pharmacySchema.post('save', handleMongooseError);

const addSchema = Joi.object({
	name: Joi.string().required(),
	adress: Joi.string().required(),
	logo: Joi.string(),
});

 const schemas = { addSchema };

const Pharmacy = model('pharmacy', pharmacySchema);

module.exports = { Pharmacy, schemas };
