
var express = require('express');
const userHelpers = require('../helpers/user-helpers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/allusers',(req,res)=>{
  userHelpers.getUsers().then((data)=>{
    console.log(data)
  res.render('userslist',{data})
  })
})

router.post('/signup',(req,res)=>{
  userHelpers.addSignup(req.body).then((data)=>{
    
    res.redirect('/')
  })
})
router.get('/update/:id',(req,res)=>{
  console.log(req.params)
  userHelpers.editUser(req.params.id).then((data)=>{
    console.log(data)
    res.render('userupdate',{data})
  })
  
})
router.post('/update/:id',(req,res)=>{
  userHelpers.edited(req.body,req.params.id).then((data)=>{
    res.redirect('/allusers')
  })
})
module.exports = router;
