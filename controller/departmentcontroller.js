var Dept = require("../DAL/departmentdb");

exports.GetAll = function (request, response) {
    Dept.GetAll(request, response);
};

exports.GetById = function (request, response) {
    Dept.GetById(request, response);
};

exports.InsertDepartment = function (request, response) {
    Dept.InsertDepartment(request, response);
};

exports.UpdateDepartment = function (request, response) {
    Dept.UpdateDepartment(request, response);
};

exports.DeleteById = function (request, response) {
    Dept.DeleteById(request, response)
};
