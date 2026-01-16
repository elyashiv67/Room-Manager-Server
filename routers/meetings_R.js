const express = require('express');
const router = express.Router();
const { getAllMeetings } = require('../controller/meetings_C.js');




router.get('/', getAllMeetings);



module.exports = router;