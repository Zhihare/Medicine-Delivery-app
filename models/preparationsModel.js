const { model, Schema } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const preparationsSchema = new Schema(
	{
		Name: {
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
        deteils:{
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
	Name: Joi.string().required(),
	price: Joi.number().required(),
    quantity: Joi.number().required(),
    photo: Joi.string(),
    deteils: Joi.string(),
});

 const schemas = { addSchema };

const Preparations = model('preparations', preparationsSchema);

module.exports = { Preparations, schemas };
