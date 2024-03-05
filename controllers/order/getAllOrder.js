const { HttpError } = require('../../helpers');
const { Order } = require('../../models/orderModel');

const orderList = async (req, res) => {
    const {name, email} = req.body;
    const filter = { name, email };
    const searchfordate = await Order.findOne(filter);

	if (!searchfordate) throw HttpError(404);


		res.status(200).json({
			orders: searchfordate.orderlist
        });
	}


module.exports = orderList;
