const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.get("/", (req, res)=> {res.send("Hello from root")});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/test-api", (req, res)=> {res.send(req.body); console.log(req.body)})

mongoose.connect('mongodb://localhost/employeedb',{useNewUrlParser: true, useUnifiedTopology: true});

const port = 3000;
const local = '127.0.0.1';

app.listen(port, local, ()=>{
    console.log(`Server listening at http://${local}:${port}/`);
})

// set to use routes
app.use("/api", require('./routes/api'));