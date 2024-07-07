const express = require ('express')

app.post('/login',(req,res)=>{
    console.log(req.body)
    const name = req.body;
    const password = req.body;
    // const {name, password} = req.body;
    res.send("OK")
})
