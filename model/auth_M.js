const db = require('../config/db_config');

async function addUserDb({userName,email,pass,tz,fullName,isAdmin,fingerprint,departmentId}) { 
    const sql = "INSERT INTO users (user_name, user_pass, user_email, TZ, full_name, is_admin, fingerprint, department_id) VALUES (?,?,?,?,?,?,?,?)";
    const [result] = await db.query(sql, [userName, pass, email, tz, fullName, isAdmin, fingerprint, departmentId]); 
    console.log(result);
    return result.insertId;
}

async function getByUserName(userName) {
    try {
        const sql = "SELECT * FROM users WHERE user_name = ?";
        const [rows] = await db.query(sql, [userName]);
        return rows[0];
    } catch (err) {
        console.log(err);
    }
}

async function getByEmail(email) {
    const sql = "SELECT * FROM users WHERE user_email = ?";
    const [rows] = await db.query(sql, [email]);
    return rows[0];
}
module.exports = {
    addUserDb, getByUserName, getByEmail ,
};
    
