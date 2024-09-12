/** FEEDBACK: Great job!!!! The only thing that could make this submission better is the package.json file. It seems to be incomplete. In teh future ensure to init your project by doing npm init -y on your terminal! */
const express = require('express')
const app = express()

// controllers
const serveCheese = (req, res, next) => {
 res.send('<h1>Cheeseeeee!!!!!</h1>');
}
const serveAbout = (req, res, next) => {
 res.send('<h1>About</h1>')
}
const serveHello = (req, res, next) => {
 const first = req.query.first
 const last = req.query.last
 if (first && !last) {
   return res.send(`hello ${first} ${last}!`)
 }
 res.send('hello')
}
const serveData = (req, res, next) => {
 const data = [{ name: 'blueberry' }, { name: 'fishstick' }, { name: 'sauce' }]
 res.send(data)
}

// endpoints
app.get('/', serveCheese);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
