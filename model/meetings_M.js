const db = require('../config/db_config');

async function getAll() {
    let sql = `SELECT * FROM meetings`;
    let [rows] = await db.query(sql);
    console.log(rows);
    return rows;
}


module.exports = { getAll };