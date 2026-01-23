const express = require('express');
const router = express.Router();
const { getAllMeetings , getMeetingById , createMeeting, deleteMeeting, updateMeeting} = require('../controller/meetings_C.js');
const { isLoggedIn } = require('../middleware/auth_MID.js');
const { ValidValues , ValidId, ValuesToEdit } = require('../middleware/meeting_MID.js');




router.get('/', isLoggedIn, getAllMeetings);
router.get('/:id', isLoggedIn, ValidId, getMeetingById);
router.post('/', isLoggedIn, ValidValues, createMeeting);
router.delete('/:id', isLoggedIn, ValidId, deleteMeeting);
router.patch('/:id', isLoggedIn, ValuesToEdit, updateMeeting);


module.exports = router;