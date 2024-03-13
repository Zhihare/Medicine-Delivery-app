const { model, Schema } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const emailReg = /^\S+@\S+\.\S+$/;

const orderSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Set password for user'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			match: emailReg,
		},
		phone: {
			type: String,
			required: [true, 'Set phone number ']
		},
		adress: {
			type: String,
			required: [true, 'Set address']
		},
		orderlist: {
			type: Array,
		},
	},
	{ versionKey: false }
);

orderSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
	email: Joi.string().pattern(emailReg).required(),
	phone: Joi.string().min(7).max(20).required(),
	name: Joi.string().required(),
	adress: Joi.string().required(),
	order: Joi.array(),
});

const getOrdersSchema = Joi.object({
	email: Joi.string().pattern(emailReg).required(),
	phone: Joi.string().required()
})


const schemas = {
	addSchema,
	getOrdersSchema,
};

const Order = model('order', orderSchema);

module.exports = { Order, schemas };
