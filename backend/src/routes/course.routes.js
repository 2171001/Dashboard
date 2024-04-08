const express = require("express");
const router = express.Router();
// const {createTemplate,updateTemplate,getTemplate} = require("../controller/template.controller")
const {createCourse,getCourses,updateCourse , getCourseDetailsInNumber,getCourseDetailsInPercentage} = require("../controller/course.controller")
const isAuthenticated = require('../middleware/authentication.middelware')

module.exports = () => {
  router.get('/getCourse',isAuthenticated,getCourses)
  router.get('/getCourseDetails/number', getCourseDetailsInNumber)
  router.get('/getCourseDetails/percentage' , getCourseDetailsInPercentage)
  router.post("/createCourse",isAuthenticated, createCourse);
  router.post("/updateCourse",isAuthenticated,updateCourse);
  return router;
};
