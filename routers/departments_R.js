const express = require('express');
const router = express.Router();
const { getAllDepartments , getDepartmentById , createDeparment, deleteDepartment, updateDepartment} = require('../controller/departments_C.js');
const { isLoggedIn } = require('../middleware/auth_MID.js');
const { ValidValues , ValidId, ValuesToEdit } = require('../middleware/departments_MID.js');




router.get('/', isLoggedIn, getAllDepartments);
router.get('/:id', isLoggedIn, ValidId, getDepartmentById);
router.post('/', isLoggedIn, ValidValues, createDeparment);
router.delete('/:id', isLoggedIn, ValidId, deleteDepartment);
router.patch('/:id', isLoggedIn, ValuesToEdit, updateDepartment);


module.exports = router;