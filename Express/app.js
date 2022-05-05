const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { 'title': 'PubG is the best game', "content": con }
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    name = req.body.name
    phone = req.body.number
    email = req.body.email
    address = req.body.address
    more = req.body.More

    let outputToWrite = `The Name Of The Client is: ${name}.
Client Phone Number is: ${phone}.
Client E-mail is ${email}.
Client Address is ${address}.
More About him/her: ${more}`
    fs.writeFile('output.txt', outputToWrite, (err)=>{
        console.log(err)
    })
    fs.appendFile('output.txt', outputToWrite, (err)=>{
        console.log(err)} )
    const params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);

})
// START THE SERVER
app.listen(port, ()=>{
    console.log(`My First Express App Started is: http://localhost:${port}`);    
})