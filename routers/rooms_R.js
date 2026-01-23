const express = require('express');
const router = express.Router();
const {getAllRooms, getRoom, deleteRoom, updateRoom, addRoom} = require('../controller/rooms_C.js');
const {ValidId, valuesToEdit, validateNewRoom} = require('../middleware/rooms_MID.js');
const {isLoggedIn} = require('../middleware/auth_MID.js');

router.get('/', isLoggedIn, getAllRooms);
router.get('/:id', ValidId, getRoom);
router.post('/', validateNewRoom, addRoom);
router.delete('/:id', ValidId, deleteRoom);
router.patch('/:id', ValidId, valuesToEdit, updateRoom);

module.exports = router;