const db = require('../config/db_config');
async function getAll() {
    let sql = `SELECT * FROM departments`;
    let [rows] = await db.query(sql);
    console.log(rows);
    return rows;
}
async function getById(id) {
    let sql = `SELECT * FROM departments WHERE id = ?`;
    let [rows] = await db.query(sql, [id]);
    return rows[0];
}
async function deleteById(id) {
    let sql = `DELETE FROM departments WHERE id = ?`;
    let [rows] = await db.query(sql, [id]);
    return rows;
}
async function addDepartment(department) {
    let sql = `INSERT INTO departments(department_name,id) VALUES (?,?)`;
    let [rows] = await db.query(sql, [department.department_name, department.id]);
    return rows;
}

//להוסיף פונקציה במידלוור שמקבלת את האיידי של הפגישה והיוזר איידי מהטוקן
//ומקבלת אובייקט עם השדות לעדכון
async function patchDepartment(department_name,department_id,values) {
    let keys = Object.keys(department);
    console.log(keys);
    let values = Object.values(department);
    console.log(values);
    let set = keys.map(k=>`${k}=?`).join(',');
    let sql = `UPDATE departments SET ${set} WHERE id = ? and user_id = ?`;
    console.log(sql);
    let [result] = await db.query(sql,[...values,department_name,department_id]);
    return result.affectedRows;
}

module.exports = { getAll, getById, addDepartment, deleteById, patchDepartment };