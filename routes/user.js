var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017";

/* GET home page . */
router.get('/', function(req, res) {
  let products = [
    {
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online.",
      imageUrl : "./images/img1.jpg"
    },
    {
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online.",
      imageUrl : "./images/img1.jpg"
    },
    {
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online. ",
      imageUrl : "./images/img1.jpg"
    },
    {
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online.",
      imageUrl : "./images/img1.jpg"
    }
  ] 
  res.render('index', { title: 'Sample Ecommerce', products, admin: false});
});
/*
router.post('/submit', function(req, res){
  console.log(req.body);

  MongoClient.connect('mongodb://localhost:27017', function(err, client){
    if(err)
      console.log('error')
    else
      client.db('ecommerce').collection('user').insertOne(req.body);
    
  });

  res.send("submitted");
});

*/

module.exports = router;
