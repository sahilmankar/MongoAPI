const mongoose = require('mongoose');
var Department = require('../BOL/department');


// mongoose.Promise=global.Promise ;
mongoose.connect("mongodb://localhost/transflower");

exports.GetAll=function(request,response){

    var onSuccess = (err,data) => {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(data);
            response.send(data);
        }
    }
    Department.find(onSuccess).projection({ "_id": 0 });  //onsuccess is callback function
};

exports.GetById=function(request,response){

    var onSuccess = (err,data) => {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(data);
            response.send(data);
        }
    }
    let query={id:request.params.id};
    Department.findOne(query,onSuccess).projection({ "_id": 0 });
};


exports.InsertDepartment=function(request,response){

    var onSuccess = (err,data) => {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(data);
            response.send("data inserted sucessfully");
        }
    }
    let newdepartment=request.body;
    // Department.create(newdepartment,onSuccess);
    Department.insertMany(newdepartment,onSuccess);
};



exports.UpdateDepartment=function(request,response){

    var onSuccess = (err,data) => {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(data);
            response.send("data updated sucessfully");
        }
    }
   
    let newdepartment=request.body;
    let query={id:request.params.id};

    //  console.log(id);
    //  console.log(newdepartment);

    Department.findOneAndUpdate(query,newdepartment,onSuccess);
};



exports.DeleteById=function(request,response){

    var onSuccess = (err,data) => {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            
            response.send("record deleted successfully");
        }
    }
    let query={id:request.params.id};
    Department.deleteOne(query,onSuccess);
};
