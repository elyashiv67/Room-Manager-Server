function ValidId(req,res,next){
 let id = Number(req.params.id);
 if(isNaN(id) || id <= 0)
    res.status(400).json('id not valid');

 req.id = id;
 next();
}

function valuesToEdit(req,res,next){
   let obj = {};
   if(req.body.fullName){
      obj.full_name = req.body.fullName;
   }
   if(req.body.email){
      obj.user_email = req.body.email;
   }
   if(req.body.userName){
      obj.user_name = req.body.userName;
   }
   if(req.body.tz){
      obj.TZ = req.body.tz;
   }
   if(req.body.isAdmin){
      obj.is_admin = req.body.isAdmin;
   }
   if(req.body.fingerprint){
      obj.fingerprint = req.body.fingerprint;
   }
   if(req.body.departmentId){
      obj.department_id = req.body.departmentId;
   }

   let keys = Object.keys(obj);
   if(keys.length === 0){
      return res.status(400).json({message:"there is no data"});
   }
   req.user = obj;
   next();
}


module.exports = {ValidId,valuesToEdit}