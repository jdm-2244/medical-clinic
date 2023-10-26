import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host:"medicalclinic16.mysql.database.azure.com",
    user:"medclinic_admin",
    password:"UmaTeam16",
    database:"hospital"
})

app.listen(8800,()=>{
    console.log("Connected to server!")
})