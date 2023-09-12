const express = require('express');
const path = require('path');
const fs= require('fs');
const {v4: uuid} = require('uuid')

app.get('/api/notes', (req, res) =>{
    const json =fs.readFileSync(path.join(__dirname,'./db/db.json'))
    const data = JSON.parse(json)
    res.json(data)
})
    
app.post('/api/notes', (req, res) =>{
    const json =fs.readFileSync(path.join(__dirname,'./db/db.json'))
    
    const data = JSON.parse(json)
    const {title, text} = req.body
    const newNote = {title, text, id: uuid()}
    data.push(newNote)
    const jsonData = JSON.stringify(data)
    fs.writeFileSync(path.join(__dirname,'./db/db.json'), jsonData)
    
    res.json(newNote)
})
//route to deleta notes
router.delete("/api/notes/:id", (req, res) => {
    console.log("Params Obj: ", req.params)
    let idToRemove = req.params.id;
    
    // --> JSON DATA
    // 1) we should GRAB the current data
    const json = fs.readFileSync(path.join(__dirname,'./db/db.json'))
    console.log("type of data: ", typeof json); // --> 'string'
    // 2) we convert the JSON data into something more useful (JS Object)
    const data = JSON.parse(json)
    console.log("type of data: ", typeof data); // --> 'object' [{}, {}]
    // 3) remove/filter out unwanted data
    let filteredData = data.filter(item => {
        return (item.id !== idToRemove)
    });  // --> Here we have our updated dataset (but in an JavaScript Array)
    // 4) we need to update the JSON data (in json format)
    const jsonData = JSON.stringify(filteredData)  // we converted the JS Array to a JSON (string array)
    fs.writeFileSync(path.join(__dirname,'./db/db.json'), jsonData)
    
    res.send("record deleted");
});