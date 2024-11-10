const Blog = require("../models/Blog");

// Add a new blog to a specific course
exports.addBlog = async (req, res) => {
    console.log(req.params.courseId);
   
  try {
    const blog = new Blog({ ...req.body, courseId: req.params.courseId });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
      
  }
};

// Get all blogs for a specific course
exports.getBlogsByCourse = async (req, res) => {
  try {
    const blogs = await Blog.find({ courseId: req.params.courseId });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
