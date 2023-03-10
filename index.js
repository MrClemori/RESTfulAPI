import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'

const app = express()

const port = 3000
const DB_URL = 'mongodb+srv://user:user@cluster0.tqzkydd.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(port, () => console.log(`server start to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
startApp()

//const urlencodedParser = express.urlencoded({extended: false})