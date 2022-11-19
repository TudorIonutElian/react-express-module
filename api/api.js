// Set expres server
const express = require('express')
const app = express();
const cors = require('cors');
const port = 3001;

// Get modules data to be exported
const api1Data = require("./data/api1-data.json") ;
const api2Data = require("./data/api2-data.json") ;

app.use(cors({
  origin: '*'
}));


// define API 1 route
app.get('/api1', (req, res) => {
    res.json(api1Data.data);
});

// define API 2 route
app.get('/api2', (req, res) => {
    res.json(api2Data.data);
});


app.listen(port, () => {
  console.log(`Games API listening on port: ${port}`)
})