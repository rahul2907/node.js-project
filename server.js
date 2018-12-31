const express = require('express');
const hbs = require('hbs');

const app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
     res.render('home.hbs',{
         pagename: 'Home Page',
         currentYear: new Date().getFullYear()
     })
});

app.get('/about', (req, res)=>{
   res.render('about.hbs',{
       pagename: 'About Page',
       currentYear: new Date().getFullYear()
   });
});

app.listen(port, ()=>{
    console.log(`connected to port ${port}`);
});
