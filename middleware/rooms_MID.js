function ValidId(req,res,next){
    let id = Number(req.params.id);
    if(isNaN(id) || id <= 0)
        return res.status(400).json('id not valid');
    req.id = id;
    next();
}

function valuesToEdit(req,res,next){
    const allowedFields = ['room_number', 'room_floor', 'size', 'is_taken'];
    const keys = Object.keys(req.body);
    if(keys.length === 0){
        return res.status(400).json('no fields to edit');
    }
    const invalidFields = keys.filter(key => !allowedFields.includes(key));
    if(invalidFields.length > 0){
        return res.status(400).json(`invalid fields: ${invalidFields.join(', ')}`);
    }
    next();
}

function validateNewRoom(req,res,next){
    const {room_number, room_floor, size, is_taken} = req.body;
    if(!room_number || !room_floor || !size || is_taken === undefined){
        return res.status(400).json('all fields are required');
    }
    if(isNaN(room_number) || isNaN(room_floor) || isNaN(size)){
        return res.status(400).json('room number, room floor and size must be numbers');
    }
    if(is_taken !== 0 && is_taken !== 1){
        return res.status(400).json('is_taken must be 0 or 1');
    }
    next();
}

module.exports = {ValidId, valuesToEdit, validateNewRoom};
