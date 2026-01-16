const { getAll } = require('../model/meetings_M.js');

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

module.exports = { getAllMeetings };