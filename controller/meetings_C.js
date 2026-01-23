const { getAll , getById , addMeeting , deleteById , patchMeeting} = require('../model/meetings_M.js');

async function getAllMeetings(req, res) {
    try {
        let meetings = await getAll();

        if (meetings.length === 0) {
            return res.status(400).json({ message: 'no data' });
        }
        
        res.status(200).json(meetings);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getMeetingById(req, res) {
    try {
        let meeting = await getById(req.id);

        if (!meeting) {
            return res.status(400).json({ message: 'no data' });
        }
        res.status(200).json(meeting);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteMeeting(req, res) {
    try {
        let affectedRows = await deleteById(req.id);
        if(!affectedRows){
            return res.status(400).json({ message: 'Meeting not found' });
        }
        console.log(affectedRows);
        return res.status(200).json({ message: 'Meeting deleted successfully' });
        

        
    } catch (err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
}
async function createMeeting(req, res) {
    try {
        let meeting = req.meeting;
        if (!meeting) {
            return res.status(400).json({ message: 'Invalid meeting data' });
        }
        let result = await addMeeting(meeting);
        res.status(201).json({ message: 'Meeting created', meetingId: result.insertId });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateMeeting(req,res) {
    try {
        let user_id = req.user.id;
        let meetingId = req.params.id;
        let values = req.values;
        let meeting = await patchMeeting(meetingId,user_id,values);
        console.log(meeting);
        
        if(!meeting){
            res.status(400).json({message:"not updated"});
        }
        res.status(200).json({message:"updated"});

    } catch (err) {
        res.status(500).json({message:"server error"});
    }
}


module.exports = { getAllMeetings, getMeetingById , deleteMeeting , createMeeting , updateMeeting};