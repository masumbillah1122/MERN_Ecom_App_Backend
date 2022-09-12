import express from 'express';
import data from '../data.js';
import Blog from '../models/blogModel.js';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import Rating from '../models/ratingModel.js';
import Subcategory from '../models/subcategoryModel.js';
import User from '../models/userModel.js';

//for  seed all datas from data.js
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //seed for users
  await User.remove({});
  const createdUser = await User.insertMany(data.users);

  //seed for Products
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.products);
  //seed for blogs
  await Blog.remove({});
  const createdBlog = await Blog.insertMany(data.blogs);

  //seed for Category
  await Category.remove({});
  const createdCategory = await Category.insertMany(data.category);

  //seed for Subcategory
  await Subcategory.remove({});
  const createdSubCategory = await Subcategory.insertMany(data.subcategory);

  //seed for Rating
  await Rating.remove({});
  const createdRating = await Rating.insertMany(data.ratings);
  res.send({
    createdUser,
    createdBlog,
    createdProduct,
    createdCategory,
    createdSubCategory,
    createdRating,
  });
});

export default seedRouter;