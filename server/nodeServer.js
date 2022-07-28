const express = require("express");
const app = express();
require('./DB-connection')
const cors = require('cors')
const authentication = require('./models/Auth');
const port = 3690
const authRouter = require("./routes/Auth")
//=============================================
app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)

//=============================================

//=============================================
app.listen(port, () => { console.log(`chal gaya node server ${port} ispe`) })
module.exports = app;
