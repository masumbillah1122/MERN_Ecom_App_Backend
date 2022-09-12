import express from "express";
import Blog from "../models/blogModel.js";

const blogRouter = express.Router();

// for add post -> from admin panel
blogRouter.post("/add", async (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    description: req.body.description
  });
  const blog = await newBlog.save();
  res.send({
    _id: blog._id,
    title: blog.title,
    description: blog.description,
    author: blog.author,
  });
});

//get All blogs -> for fronted
blogRouter.get('/all', async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
});

//get blog by id -> for fronted
blogRouter.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
        res.send(blog);
    } else {
        res.status(404).send({ message: 'Blog not found!' });
    }
})

export default blogRouter;