const express = require('express');
const path = require('path');
const fs= require('fs');
const {v4: uuid} = require('uuid')
//const { clog } = require('./middleware/clog');
//const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

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

app.delete("/api/notes/:id", (req, res) => {
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

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route 
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
