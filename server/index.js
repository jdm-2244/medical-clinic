import express from "express";
import mysql from "mysql";

const app = express()

app.listen(8800,()=>{
    console.log("Connected to server!")
})