const app = express();
require('dotenv').config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

import {require} from './node_modules'

require("dotenv").config();
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
app.use(express.json());
const mongodb = require('mongodb')
const routes = require("./src/routes") 
const url = "/";
connectTodatabase()
const connectTodatabase = require('./database')

mongoose.connect("mongodb+srv://philosophia469:De0510426019411945@cluster0.5rojuhi.mongodb.net/?retryWrites=true&w=majority/",{
    useNewUrlParser: true,
    useUnifiedToplogy: true,
})

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("conectado ao banco de dados!"));
app.get('/', function(req, res){
    res.json({message:'projeto 5 DNC'})
});
const app = express();
const port = 5173;

app.use({routes});

app.listen(port,() =>{
console.log(`Backend starded at  httm://localhost:${port}`);
});
