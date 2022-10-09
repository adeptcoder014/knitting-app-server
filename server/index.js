const express = require("express");
const app = express();
require('./DB-connection')
const cors = require('cors')
require('dotenv').config()
//=============================================
app.use(cors())
app.use(express.json())
app.use('/user',require("./routes/user"))


//=============================================

//=============================================
app.listen(process.env.PORT, () => { console.log(`Server started on : ${process.env.PORT} `) })
module.exports = app;
