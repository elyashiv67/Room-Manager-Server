const {getAllRoomsModel, getRoomByIdModel, addRoomModel, deleteRoomModel, updateRoomModel} = require('../model/rooms_M.js');

async function getAllRooms(req,res){
    try{
        let rooms = await getAllRoomsModel();
        if(rooms.length == 0){
            return res.status(400).json({message:'no rooms found'});
        }
        res.status(200).json(rooms);
    }catch(err){
        console.log(err);
        res.status(500).json({message:'server error'});
    }
}

async function getRoom(req,res){
    try{
        let room = await getRoomByIdModel(req.params.id);
        if(!room){
            return res.status(400).json({message:'room not found'});
        }
        res.status(200).json(room);
    }catch(err){
        console.log(err);
        res.status(500).json({message:'server error'});
    }
}

async function deleteRoom(req,res){
    try{
        let affectedRows = await deleteRoomModel(req.params.id);
        if(!affectedRows){
            return res.status(400).json({message:'room not found'});
        }
        res.status(200).json({message:'room deleted'});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'server error'});
    }
}

async function updateRoom(req,res){
    try{
        let affectedRows = await updateRoomModel(req.params.id, req.body);
        if(!affectedRows){
            return res.status(400).json({message:'room not found'});
        }
        res.status(200).json({message:'room updated'});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'server error'});
    }
}


async function addRoom(req,res){
    try{
        let room = await addRoomModel(req.body);
        if(!room){
            return res.status(400).json({message:'room not added'});
        }
        res.status(200).json({message:'room added', room:room + 'added successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'server error'});
    }
}

module.exports = {getAllRooms, getRoom, deleteRoom, updateRoom, addRoom};