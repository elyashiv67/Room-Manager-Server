const {getAllRooms, getRoomById, addRoom, deleteRoom, updateRoom} = require('../model/rooms_M.js');

async function getAllRooms(req,res){
    try{
        let rooms = await getAllRooms();
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
        let room = await getRoomById(req.params.id);
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
        let affectedRows = await deleteRoom(req.params.id);
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
        let affectedRows = await updateRoom(req.params.id, req.body);
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

module.exports = {getAllRooms, getRoom, deleteRoom, updateRoom, addRoom};