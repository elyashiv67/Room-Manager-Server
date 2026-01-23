
function ValidValues(req,res,next){
    let date_and_time = req.body.date_and_time;
    let room_id = req.body.room_id;
    let user_id = req.user.id;
    if(!date_and_time || !room_id){
        return res.status(400).json({message:'all fields are required'});
    }
    req.meeting = {
        date_and_time: date_and_time,
        room_id: room_id,
        user_id: user_id
    };
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
    if(req.body.date_and_time){
        obj.date_and_time = req.body.date_and_time;
    }
    if(req.body.room_id){
        obj.room_id = req.body.room_id;
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