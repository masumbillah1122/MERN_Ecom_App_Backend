import express from "express";
import Subcategory from "../models/subcategoryModel.js";

const subcategoryRouter = express.Router();

//get All subcategory -> for fronted
subcategoryRouter.get("/all", async (req, res) => {
  const subcategories = await Subcategory.find();
  res.send(subcategories);
});

export default subcategoryRouter;