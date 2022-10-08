const express = require("express");
const app = express();
require('./DB-connection')
const cors = require('cors')
const authRouter = require("./routes/Auth")
require('dotenv').config()
//=============================================
app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)

app.get('/',(req,res)=>{
    res.send('------------ WELCOME_ADEPT_BANIYA -------------')
})
//=============================================

//=============================================
app.listen(process.env.PORT, () => { console.log(`chal gaya node server ${process.env.PORT} ispe`) })
module.exports = app;
