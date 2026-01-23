const express = require('express');
const path = require('path');
const cookies = require('cookie-parser');
const router = express.Router();
const app = express();
require('dotenv').config();
const port = process.env.PORT ;
const api = process.env.HOST;
const db = require('./config/db_config');
app.use(express.json());
app.use(cookies());

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.use('/users',require('./routers/users_R'));
app.use('/auth',require('./routers/auth_R'));
app.use('/meetings',require('./routers/meetings_R'));

app.listen(port,()=>{console.log(`http://${api}:${port}`);})
