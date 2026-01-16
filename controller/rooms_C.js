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