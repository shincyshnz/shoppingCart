var express = require('express');
var router = express.Router();

/* GET admin listing. */
router.get('/', function(req, res) {
  let products = [
    {
      id : "cake1",
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online.",
      price : 100,
      imageUrl : "./images/img1.jpg"
    },
    {
      id : "cake2",
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online.",
      price : 100,
      imageUrl : "./images/img1.jpg"
    },
    {
      id : "cake3", 
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online. ",
      price : 100,
      imageUrl : "./images/img1.jpg"
    },
    {
      id : "cake4",
      name: "First Day at school",
      category : "Cake",
      description: "Cakes are a requisite to celebrate every occasion. It adds so much of sweetness and delicacy in one’s life. Trigger those delightful moments in your loved ones lives by sending them best cakes online.",
      price : 100,
      imageUrl : "./images/img1.jpg"
    }
  ] 

  res.render('admin/view-products',{products, admin: true });
});

router.get('/add-products', (req, res) => {
  res.render('admin/add-products');
});

router.post('/add-products', function (req, res) {
  console.log(req.body);
  console.log(req.files.image);
});

module.exports = router;
