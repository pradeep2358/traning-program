const TeacherController={
    create(req,res){
        const body=req.body
        res.send({
            message:"success!new record created",
        body
        });
    },
     readAll(req,res){
        res.send({
            message:"success!new record 1000",
        });
    },
     readOne(req,res){
        res.send({
            message:"success!new record 49",
        });
    },
     update(req,res){
        res.send({
            message:"success!new record updated",
        });
    },
     destroy(req,res){
        res.send({
            message:"success!new record deleted",
        });
    },
  
}

  module.exports=TeacherController