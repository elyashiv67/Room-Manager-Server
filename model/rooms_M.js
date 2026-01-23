const db = require('../config/db_config.js');

async function getAllRoomsModel(){

    let sql = `SELECT * FROM rooms`;
    let [rows] = await db.query(sql);
    return rows;
}

async function getRoomByIdModel(id){
    let sql = `SELECT * FROM rooms WHERE id = ?`;
    let [row] = await db.query(sql, [id]);
    return row[0];
}

async function addRoomModel(room){
    let sql = `INSERT INTO rooms (room_number, room_floor, size, is_taken) VALUES (?, ?, ?, ?)`;
    let [result] = await db.query(sql, [room.room_number, room.room_floor, room.size, room.is_taken]);
    console.log(result);
    return result.insertId;
}

async function deleteRoomModel(id){
    let sql = `DELETE FROM rooms WHERE id = ?`;
    let [result] = await db.query(sql, [id]);
    return result.affectedRows;
}

async function updateRoomModel(id, room){
    let keys = Object.keys(room);
    console.log(keys);
    let values = Object.values(room);
    console.log(values);
    let set = keys.map(k=>`${k}=?`).join(',');
    let sql = `UPDATE rooms SET ${set} WHERE id = ?`;
    console.log(sql);
    let [result] = await db.query(sql, [...values, id]);
    return result.affectedRows;
}

module.exports = {getAllRoomsModel, getRoomByIdModel, addRoomModel, deleteRoomModel, updateRoomModel};