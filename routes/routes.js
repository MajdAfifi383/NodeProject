const express = require("express")
const router = express.Router();
var studentModel = require('../src/student/studentModel');
router.post("/student/create", async (req,res)=>{
 
const  student=new studentModel(req.body);
try{
    await student.save();
    res.status(201).send({
        "status":true,
        "message":"student created !!!!"
    });

}
catch(error)
{
res.status(400).send(error)
}
});

router.get('/students', async(req,res)=>{
   
    try{
         const students = await studentModel.find({});
         res.send(students);
    }
    catch(error)
    {
         res.status(400).send(error);
    }
 });

 router.get('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const student = await studentModel.findById(_id);
        if (!student) {
            return res.status(404).send();
        }
        return res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch('/students/:id', async(req,res)=>{
   
    try{
        const _id = req.params.id;
        const body = req.body;
        const updatestudents = await studentModel.findByIdAndUpdate(_id,body,{new:true});
        if(!updatestudents)
        {
            return res.status(404).send();
        }  
     
        res.status(201).send(
            {
                "status" : true,
                "message" : "Student updateddd!!!!!!!!!!!!!!!!"
            });
 
    }
    catch(error)
    {
         res.status(400).send(error);
 
    }
 
 });

//delete records
router.delete('/students/:id', async(req,res)=>{
   
    try{
            const _id = req.params.id;
        
         const deletestudents = await studentModel.findByIdAndDelete(_id);
        if(!deletestudents)
        {
            return res.status(404).send();
        }  
       
        res.status(201).send(
            {
                
                "status" : true,
                "message" : "Student Deletedd!!!!!!!!!!!!!!!!"
            });
    }
    catch(error)
    {
         res.status(400).send(error);
 
    }
 });



 module.exports = router;
