const express = require("express");
const router = express.Router();

const credential = {
  email: "adminlogin@gmail.com",
  password: "Asd@123",
};

// Route for login user
router.post("/login", (req, res) => {
  // Log the request body
  console.log('Request Body:', req.body);

  const { email, password } = req.body;

  if (email === credential.email && password === credential.password) {
    req.session.user = email;
    res.redirect('/route/dashboard')
    // res.send("Login successful");
  } else {
    res.send("Invalid username or password");
  }
});

router.get('/dashboard',(req,res)=>{
    console.log(req.session, 'req is consoled')
  if(req.session.user){
    res.render('dashboard',{user:req.session.user, title: "Dashboard"})
  }else{
    res.send("unauthorized user")
  }
})
router.get('/logout',(req,res)=>{
  req.session.destroy(function(err){
    if(err){
        console.log(err);
        res.send("Error")
    }else{
        res.render('base',{title:"Express",logout:"Logout successfully"})
    }
  })
})

module.exports = router;
