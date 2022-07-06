const express = require("express");
const app = express();
require('./DB-connection')
const cors = require('cors')
const authentication = require('./models/Auth');
const Auth = require("./models/Auth");
const port = 3690
//=============================================
app.use(cors())
app.use(express.json())
//=============================================
//-------------------------- Routing =============================================
app.post('/auth', async (req, res) => {
    console.log("------->", req.body)
    const auth = new authentication(req.body)
    try {
        await auth.save();
        res.status(201).json({
            status: 'Ho gaya 😊',
            data: {
                auth
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Nahi hua 😔',
            message: err.message
        })
    }
})
app.get("/get-auth-user", async (req, res) => {
    const fetched_user = await authentication.find({})
    console.log(fetched_user)
    try {

        res.status(200).json({
            status: 'Mil  gaya 😊',
            data: {
                fetched_user
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Nahi mila 😔',
            message: err.message
        })
    }
})
app.patch("/update-auth-user/:id", async (req, res) => {
    console.log("----->", req.params.id)
    const updated_user = await authentication.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    try {

        res.status(200).json({
            status: 'Ho  gaya 😊',
            data: {
                updated_user
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Nahi hua 😔',
            message: err.message
        })
    }
})
app.delete("/delete-auth-user/:id", async (req, res) => {
    await authentication.findByIdAndDelete(req.params.id)
    try {

        res.status(204).json({
            status: 'Ho  gaya 😊',
            data: {

            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Nahi hua 😔',
            message: err.message
        })
    }
})
//=============================================
app.listen(port, () => { console.log(`chal gaya node server ${port} ispe`) })