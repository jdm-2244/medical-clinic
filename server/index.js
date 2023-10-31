import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host:"medicalclinic16.mysql.database.azure.com",
    user:"medclinic_admin",
    password:"UmaTeam16",
    database:"hospital"
})

app.get("/", (req,res)=>{
    res.json("this is the backend")
})
app.get("/doctor", (req,res)=>{
    const q = "SELECT * FROM doctor"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//if theres an auth problem
//ALTER USER 'medclinic_admin'@'medicalclinic16.mysql.database.azure.com' IDENTIFIED WITH mysql_native_password BY 'UmaTeam16'

app.listen(8800,()=>{
    console.log("Connected to server!")
})