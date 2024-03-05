const { model, Schema } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const preparationsSchema = new Schema(
	{
		name: {
			type: String,
		},
		price: {
			type: Number,
		},
        quantity:{
            type: Number,
        },
        photo:{
            type: String,
        },
        details:{
            type: String,
        },
		 owner: {
			type: Schema.Types.ObjectId,
			ref: 'pharmacy',
			required: true,
		},
	},

	{ versionKey: false, timestamps: true }
);

preparationsSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
	name: Joi.string().required(),
	price: Joi.number().required(),
    quantity: Joi.number().required(),
    photo: Joi.string(),
    details: Joi.string(),
  
});

 const schemas = { addSchema };

const Preparations = model('preparations', preparationsSchema);

module.exports = { Preparations, schemas };
