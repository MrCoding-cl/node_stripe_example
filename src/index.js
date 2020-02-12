const express=require('express');
const expresshbs=require('express-handlebars');
const path=require('path');
//initializations
const app=express();

//config
app.set('views',path.join(__dirname,'views')) //Find the folder

app.engine('.hbs',expresshbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.set('views'),'layouts'),
    partialsDir:path.join(app.set('views'),'partials'),
    extname:'.hbs'
}));

app.set('view engine','.hbs');
//static files

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require('./routes'));

app.use(express.static(path.join(__dirname,'public')));
//start
app.listen(3000,()=>{
    console.log('Server listening on port',3000);
});