const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");


dotenv.config();

const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({
    origin: "*",
    credentials: true,
}))



app.use("/api/v1/contact", require("./routes/contactRoute"))





app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ..."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})
