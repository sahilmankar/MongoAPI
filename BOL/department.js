const mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema(
    {
        id:Number,
        name: String,
        address: String
    },
    {versionkey:true}
);

module.exports=mongoose.model("departments",DepartmentSchema)