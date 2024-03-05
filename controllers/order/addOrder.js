
const { Order, Preparations } = require('../../models');
const { v4: uuidv4 } = require('uuid');
 const { newDate } = require('../../service/orderServices/newDate');

const addOrder = async (req, res) => {
	const { name, email, phone, adress, order } = req.body;

    const orderlist = [];
    let total = 0;
    const date = newDate();

    for (const orderItem of order) {

        const preparation = await Preparations.findByIdAndUpdate((orderItem.preparationID),
        {
                $inc: { quantity: -orderItem.quantity},
        },
        { new: true });

        orderlist.push({ preparation, quantity: orderItem.quantity });
        total += preparation.price * orderItem.quantity;
    }
   
	const orderID = uuidv4();

	const filter = { name, email };

	const searchfordate = await Order.findOne(filter);
	if (!searchfordate) {

		await Order.create({
			name,
            email,
            phone,
            adress,
			orderlist: [{ preparation: orderlist, total, id: orderID, date }],
		});

		res.status(201).json({
			status: "success",
	        orderlist,
            total,
			id: orderID,

		});

	} else {

		await Order.findOneAndUpdate(filter,
			{
				$push: { orderlist: { preparation: orderlist, total, id: orderID, date } },
			},
			{ new: true })

		res.status(201).json({
			status: "success",
            orderlist,
            total,
			id: orderID,
		});
	}
};

module.exports = addOrder;
