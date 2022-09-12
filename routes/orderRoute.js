import express from 'express';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

//create table for order
orderRouter.post('/', async (req, res) => {
    
  const newOrder = new Order({
    orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
    userId: req.body.userId,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    subTotal: req.body.subTotal,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
  });

  const order = await newOrder.save();
  res.status(201).send({ message: 'New Order Created', order });

});

//get all orders for user
orderRouter.get('/all', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

//get mine orders
orderRouter.get('/mine/:id', async (req, res) => {
  const order = await Order.find({ userId: req.params.id });
  res.send(order);
});

//get my one order
orderRouter.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order not found!" });
  }
});

export default orderRouter;