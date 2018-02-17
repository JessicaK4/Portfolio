const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','.hbs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log('port3000');
});
