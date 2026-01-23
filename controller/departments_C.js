const { addDepartment } = require('../model/departments_M.js');
const { getAll , getById , addDepartment , deleteById , patchDepartment} = require('../model/departments_M.js');
async function getAllDepartments(req, res) {
    try {
        let departments = await getAll();
        if (departments.length === 0) {
            return res.status(400).json({ message: 'no data' });
        }
        res.status(200).json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function getDepartmentById(req, res) {
    try {
        let department = await getById(req.id);
        if (!department) {
            return res.status(400).json({ message: 'no data' });
        }
        res.status(200).json(department);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteDepartment(req, res) {
    try {
        let affectedRows = await deleteById(req.id);
        if(!affectedRows){
            return res.status(400).json({ message: 'Department not found' });
        }
        console.log(affectedRows);
        return res.status(200).json({ message: 'Department deleted successfully' });
        
    } catch (err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function createDeparment(req, res) {
    try {
        let department = { department_name,department_id};
        
        if (!department.department_name || !department.department_id) {
            return res.status(400).json({ message: 'Invalid department data' });
        }
        let result = await addDepartment(department);
        res.status(201).json({ message: 'Department created', department_id: result.insertId });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateDepartment(req,res) {
    try {
       let department_name = req.user.id;
         let department_id = req.params.id;
        let values = req.values;
        let department = await patchDepartment(department_name,department_id,values);
        console.log(department);
        
        if(!department){
            res.status(400).json({message:"not updated"});
        }
        res.status(200).json({message:"updated"});

    } catch (err) {
        res.status(500).json({message:"server error"});
    }
}


module.exports = { getAllDepartments, getDepartmentById , deleteDepartment , createDeparment , updateDepartment};