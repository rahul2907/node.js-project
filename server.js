const express = require('express');
const hbs = require('hbs');

const app = express();
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

app.listen(3000);
