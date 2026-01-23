
function ValidValues(req,res,next){
    let department_name = req.body.department_name;
    let department_id = req.body.id;
    let user_id = req.user.id;
    if(!department_name || !department_id){
        return res.status(400).json({message:'all fields are required'});
    }
    req.department = {
        department_name: department_name,
        department_id: department_id,
        user_id:user_id
    }
    next();
}
function ValidId(req,res,next){
    try {
        let id = Number(req.params.id);
        if(isNaN(id) || id <= 0)
           return res.status(400).json('id not valid');
        
        req.id = id;
        next();
    } catch (error) {
        console.log(error);
    }
}
function ValuesToEdit(req,res,next){
    let obj = {};
    if(req.body.department_id){
        obj.department_id = req.body.department_id;
    }
    if(req.body.id){
        obj.id = req.body.id;
    }
    let keys = Object.keys(obj);
    if(keys.length == 0){
        return res.status(400).json({message:'at least one field is required'});
    }
    req.values = obj;
    next();
}

module.exports = {ValidId,
    ValidValues,
    ValuesToEdit,
};