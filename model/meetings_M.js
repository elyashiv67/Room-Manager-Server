const db = require('../config/db_config');

async function getAll() {
    let sql = `SELECT * FROM meetings`;
    let [rows] = await db.query(sql);
    console.log(rows);
    return rows;
}

async function getById(id) {
    let sql = `SELECT * FROM meetings WHERE id = ?`;
    let [rows] = await db.query(sql, [id]);
    return rows[0];
}

async function deleteById(id) {
    let sql = `DELETE FROM meetings WHERE id = ?`;
    let [rows] = await db.query(sql, [id]);
    return rows;
}

async function addMeeting(meeting) {
    let sql = `INSERT INTO meetings(date_and_time, user_id, room_id) VALUES (?, ?, ?)`;
    let [rows] = await db.query(sql, [meeting.date_and_time, meeting.user_id, meeting.room_id]);
    return rows;
}


//להוסיף פונקציה במידלוור שמקבלת את האיידי של הפגישה והיוזר איידי מהטוקן
//ומקבלת אובייקט עם השדות לעדכון
async function patchMeeting(meetingId, user_id, meeting) {
    let keys = Object.keys(meeting);
    console.log(keys);
    let values = Object.values(meeting);
    console.log(values);
    let set = keys.map(k=>`${k}=?`).join(',');
    let sql = `UPDATE meetings SET ${set} WHERE id = ? and user_id = ?`;
    console.log(sql);
     
    let [result] = await db.query(sql,[...values,meetingId,user_id]);
    return result.affectedRows;
}

module.exports = { getAll, getById, addMeeting, deleteById, patchMeeting };