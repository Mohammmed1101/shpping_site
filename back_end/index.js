const express = require("express");
const app = express();
const cors = require("cors");


// import db
require('./database/db.config')

// use
app.use(express.json());
app.use(cors());



// server
const port = 7000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })