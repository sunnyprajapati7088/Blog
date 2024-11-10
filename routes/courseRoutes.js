const express = require("express");
const router = express.Router();
const {
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

router.post("/courses",addCourse);
router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.put("/courses/:id",updateCourse);
router.delete("/courses/:id", deleteCourse);

module.exports = router;
