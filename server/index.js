const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const pdfTemplate = require('./document');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
      const data = req.body;
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
      
        if(err) {
            res.send(Promise.reject());
        }
        
        res.send(Promise.resolve());
    });
    
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));