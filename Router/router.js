
const express = require('express');
const router = express.Router();
const departmentcontroller = require('../controller/departmentcontroller');


router.get("/api/departments", (request, response) => {
  departmentcontroller.GetAll(request, response);
});

router.get("/api/departments/:id", (request, response) => {
  departmentcontroller.GetById(request, response);
});

router.post("/api/departments", (request, response) => {
  departmentcontroller.InsertDepartment(request, response);
});

router.put("/api/departments/:id", (request, response) => {
  departmentcontroller.UpdateDepartment(request, response);
});

router.delete("/api/departments/:id", (request, response) => {
  departmentcontroller.DeleteById(request, response);
});

module.exports = router;


