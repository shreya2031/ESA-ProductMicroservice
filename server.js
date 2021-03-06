var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),

  User = require('./models/userModel'), 
  Product = require('./models/ProductModel'),
  bodyParser = require('body-parser');
  require("dotenv").config();

//MongoDB Atlas connection url
const uri = process.env.mongo_URI;

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Routes
var userRoutes = require('./routes/userRoutes'); 
var productRoutes = require('./routes/productRoutes');
//Connecting it to the express module
userRoutes(app); 
productRoutes(app);

app.listen(port);

console.log('Product API server running on port : ' + port);


