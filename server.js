const express = require("express");
require("dotenv").config();
const app = express();

app.get("*", (req, res) => {
    res.send("Hello")
});

const PORT = process.env.PORT;
app.listen(PORT);