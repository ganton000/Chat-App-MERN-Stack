const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on Port ${process.env.PORT}`);
});
