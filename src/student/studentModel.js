const mongoose = require("mongoose")
const bcrypt = require( 'bcrypt' );
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
        password:{
            type:String,
            required:true
        }
  
    });
    studentSchema.pre("save", async function (next) {
        const student = this;
        if (student.isModified("password")) {
          student.password = await bcrypt.hash(student.password, 8);
        }
        next();
      });
      studentSchema.statics.findByCredentials = async (name,password)=>{
        const student = await Student.findOne({name})
       
               
            const checks = await bcrypt.compare(password,student.password)
                if(!checks)
                {
                    throw new Error()
                }
                return student
      }
    const Student = mongoose.model('student',studentSchema);
    module.exports = Student