import express from "express";
import Category from './../models/categoryModel.js';

const categoryRouter = express.Router();

//get All category -> for fronted
categoryRouter.get("/all", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

export default categoryRouter;