const StudentModel = require("./module/StudentModel");

const StudentController={
    async create(req,res){
        const body=req.body
        if(!body.name){
            res.status(500).send({
                error:"name is required"
            })
        }
        
        try {
            await StudentModel.create(body)
             res.status(201).send({
            message:"success!new record created",
          reqbody:body
        });
            
        } catch (error) {
             console.error("Error occured while creating new student:",error);
            res.status(500).send({
                error:error.message
            });
            
            
        }
       
    },
    async readAll(req,res){
        const students = await StudentModel.find()
        res.send({
            message:"success!new record 1000",
        });
    },
     async readOne(req,res){
      const params = req.params;
            const studentDetails = await StudentModel.fintById(params.id)
        res.send({
            message:"success!new record 49",
            data: studentDetails
        });
    },
     async update(req,res){
         const params = req.params
            const body = req.body
            await StudentModel.fintByIdAndUpdate(params.id,body)
        res.send({
            message:"success!new record updated",
        });
    },
     async destroy(req,res){
        const params=req.params
           await StudentModel.findByIdAndDelete(params.id)
        res.send({
            message:"success!new record deleted",
        });
    },
  
};

  module.exports = StudentController;