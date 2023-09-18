require("dotenv").config();
const express = require("express");
const router = require('./routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });