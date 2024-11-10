const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Blog routes for a specific course
router.post("/courses/:courseId/blogs", blogController.addBlog);
router.get("/courses/:courseId/blogs", blogController.getBlogsByCourse);
router.get("/blogs/:id", blogController.getBlogById);
router.put("/blogs/:id", blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
