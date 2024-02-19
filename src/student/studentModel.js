const mongoose = require("mongoose")
var Schema  = mongoose.Schema;
var studentSchema = new Schema(
    {
        name: {
            type:String,
            required: true
        },
        address: {
            type:String,
            required: true
        },
        phone: {
            type:Number,
            required: true
        },
  
    });
    const Student = mongoose.model('student',studentSchema);
    module.exports = Student